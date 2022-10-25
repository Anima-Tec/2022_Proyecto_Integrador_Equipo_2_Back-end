import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type CreateCenterInput = Pick<Prisma.UserCreateArgs, 'data'> &
  Pick<Prisma.CenterCreateArgs, 'data'>

const createCenterMutation = async ({ data }: CreateCenterInput) => {
  const isExist = await db.user.findUnique({ where: { email: data.email } })

  if (isExist)
    throw 'Ya existe un usuario con el mismo email, por favor ingrese otro'

  const center = await db.user.create({
    data: {
      rol: 'CENTER',
      name: data.name,
      email: data.email,
      hashedPassword: data.hashedPassword,
      center: {
        create: {
          phone: data.phone,
          numberVolunteersRequired: data.numberVolunteersRequired ?? 0,
          street: data.street,
          numberDoor: data.numberDoor,
          zone: {
            connect: {
              id: data.zoneId,
            },
          },
          description: data.description ?? null,
          photo: null,
        },
      },
    },
    include: {
      center: true,
    },
  })

  return dataFormater(center)
}

export { createCenterMutation }
