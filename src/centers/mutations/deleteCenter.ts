import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type DeleteCenterInput = Pick<Prisma.CenterDeleteArgs, 'where'>

const deleteCenterMutation = async ({ where }: DeleteCenterInput) => {
  const isExist = await db.user.findUnique({ where })

  if (!isExist) throw 'Centro no encontrado'

  const center = await db.user.delete({
    where,
    include: {
      center: true,
    },
  })

  return dataFormater(center)
}

export { deleteCenterMutation }
