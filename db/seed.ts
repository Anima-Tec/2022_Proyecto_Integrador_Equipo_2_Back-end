import { hashPassword } from '../src/utils/hashPassword'
import { donators, centers } from './data'
import { PrismaClient } from '@prisma/client'

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
    await db.user.create({
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
            zone: center.zone,
            numberDoor: center.numberDoor,
            departament: center.departament,
            description: center.description ?? undefined,
            photo: null,
          },
        },
      },
      include: {
        center: true,
      },
    })
  }
}

seed()
  .catch(err => console.log(err))
  .finally(async () => await db.$disconnect())
