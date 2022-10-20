import { hashPassword } from '../src/utils/hashPassword'
import { donators, centers } from './data'
import { PrismaClient } from '@prisma/client'
import { UnitMeasurementType } from '../src/interfaces/food.interface'

const db = new PrismaClient()

async function seed() {
  for (const donator of donators) {
    await db.user.create({
      data: {
        rol: 'DONATOR',
        name: donator.name,
        email: donator.email,
        hashedPassword: (await hashPassword(donator.password)) ?? '',
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

  for (const center of centers) {
    const centerCreated = await db.user.create({
      data: {
        rol: 'CENTER',
        name: center.name,
        email: center.email,
        hashedPassword: (await hashPassword(center.password)) ?? '',
        center: {
          create: {
            phone: center.phone,
            numberVolunteersRequired: center.numberVolunteersRequired ?? 0,
            street: center.street,
            numberDoor: center.numberDoor,
            zone: {
              create: {
                name: center.zone,
                deparment: {
                  create: {
                    name: center.departament,
                  },
                },
              },
            },
            description: center.description ?? null,
            photo: null,
          },
        },
      },
      include: {
        center: true,
      },
    })
    if (center.foods?.length) {
      center.foods.forEach(
        async ({ name, amount, unitMeasurement }) => {
          await db.center.update({
            where: { id: centerCreated.id },
            data: {
              foods: {
                create: {
                  amount,
                  unitMeasurement: unitMeasurement as UnitMeasurementType,
                  food: {
                    create: {
                      name,
                    },
                  },
                },
              },
            },
            include: {
              foods: true,
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
