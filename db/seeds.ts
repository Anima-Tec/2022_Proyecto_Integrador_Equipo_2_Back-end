import { hashPassword } from '../src/utils/hashPassword'
import { donators, centers, departments } from './data'
import { PrismaClient } from '@prisma/client'
import { UnitMeasurementType } from '../src/interfaces/food.interface'

const db = new PrismaClient()

async function cleanUp() {
  await db.user.deleteMany()
  await db.donator.deleteMany()
  await db.center.deleteMany()
  await db.department.deleteMany()
  await db.needsFood.deleteMany()
  await db.food.deleteMany()
}

async function seed() {
  await cleanUp()

  for (const department of departments) {
    const departamentCreated = await db.department.create({
      data: {
        name: department.name,
      },
    })

    department.zones?.forEach(async zone => {
      await db.zone.create({
        data: {
          departmentId: departamentCreated.id,
          name: zone,
        },
      })
    })
  }

  for (const donator of donators) {
    await db.user.create({
      data: {
        rol: 'DONATOR',
        name: donator.name,
        email: donator.email,
        hashedPassword: (await hashPassword(donator.password)) as string,
        donator: {
          create: {
            lastName: donator.lastName,
          },
        },
      },
      include: {
        donator: true,
      },
    })
  }

  const zones = await db.zone.findMany()

  for (const center of centers) {
    const randomZone = zones[Math.floor(Math.random() * zones.length)]
    const centerCreated = await db.user.create({
      data: {
        rol: 'CENTER',
        name: center.name,
        email: center.email,
        hashedPassword: (await hashPassword(center.password)) as string,
        center: {
          create: {
            phone: center.phone,
            numberVolunteersRequired: center.numberVolunteersRequired ?? 0,
            street: center.street,
            numberDoor: center.numberDoor,
            zone: {
              connect: {
                id: randomZone.id,
              },
            },
            description: center.description ?? null,
            photo: null,
          },
        },
      },
    })

    if (center.foods?.length) {
      center.foods.forEach(
        async ({ name, category, amount, unitMeasurement }) => {
          await db.center.update({
            where: {
              id: centerCreated.id,
            },
            data: {
              foods: {
                create: {
                  amount,
                  unitMeasurement: unitMeasurement as UnitMeasurementType,
                  food: {
                    create: {
                      name,
                      category,
                    },
                  },
                },
              },
            },
          })
        },
      )
    }
  }
}

seed()
  .catch(err => console.log(err))
  .finally(async () => await db.$disconnect())
