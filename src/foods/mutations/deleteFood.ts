import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type DeleteFoodInput = Pick<Prisma.FoodDeleteArgs, 'where'>

const deleteFoodMutation = async ({ where }: DeleteFoodInput) => {
  const isExist = await db.food.findUnique({ where })

  if (!isExist) throw 'Alimento no encontrado'

  const food = await db.food.delete({
    where,
  })

  return dataFormater(food)
}

export { deleteFoodMutation }
