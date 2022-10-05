import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type UpdateDonatorInput = Pick<Prisma.UserUpdateArgs, 'where' | 'data'> &
  Pick<Prisma.DonatorUpdateArgs, 'where' | 'data'>

const updateDonatorMutation = async ({ data, where }: UpdateDonatorInput) => {
  const isExist = await db.user.findUnique({ where })

  if (!isExist) throw 'Donador no encontrado'

  const donator = await db.user.update({
    where,
    data: {
      name: data.name,
      email: data.email,
      hashedPassword: data.hashedPassword,
      onboardingStepPosition: data.onboardingStepPosition,
      donator: {
        update: {
          lastName: data.lastName,
        },
      },
    },
    include: {
      donator: true,
    },
  })

  return dataFormater(donator)
}

export { updateDonatorMutation }
