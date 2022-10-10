import { dataFormater } from '../../utils/dataFormater'

import { Prisma, PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export type CreateDonatorInput = Pick<Prisma.UserCreateArgs, 'data'> &
  Pick<Prisma.DonatorCreateArgs, 'data'>

const createDonatorMutation = async ({ data }: CreateDonatorInput) => {
  const isExist = await db.user.findUnique({ where: { email: data.email } })

  if (isExist)
    throw 'Ya existe un usuario con el mismo email, por favor ingrese otro'

  const donator = await db.user.create({
    data: {
      rol: 'DONATOR',
      name: data.name,
      email: data.email,
      hashedPassword: data.hashedPassword,
      donator: {
        create: {
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

export { createDonatorMutation }
