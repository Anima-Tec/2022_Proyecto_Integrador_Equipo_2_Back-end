import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type UpadteUserInput = Pick<Prisma.UserUpdateArgs, 'where' | 'data'>
export type UpadteCenterInput = Pick<Prisma.CenterUpdateArgs, 'where' | 'data'>

const updateCenterMutation = async ({
  data,
  where,
}: UpadteUserInput & UpadteCenterInput) => {
  const isExist = await db.user.findUnique({ where })

  if (!isExist) throw 'Centro no encontrado'

  const center = await db.user.update({
    where,
    data: {
      name: data.name,
      email: data.email,
      hashedPassword: data.hashedPassword,
      onboardingStepPosition: data.onboardingStepPosition,
      center: {
        update: {
          phone: data.phone,
          numberVolunteersRequired: data.numberVolunteersRequired ?? 0,
          street: data.street,
          numberDoor: data.numberDoor,
          zoneId: data.zoneId,
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

export { updateCenterMutation }
