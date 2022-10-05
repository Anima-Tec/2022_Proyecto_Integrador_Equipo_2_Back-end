import { dataFormater } from '../../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type DeleteFoodInput = Pick<Prisma.NeedsFoodDeleteArgs, 'where'>

const deleteFoodMutation = async ({ where }: DeleteFoodInput) => {
  const isExist = await db.needsFood.findUnique({ where })

  if (!isExist) throw 'Alimento no encontrado'

  const food = await db.needsFood.delete({
    where,
  })

  return dataFormater(food)
}

export { deleteFoodMutation }
