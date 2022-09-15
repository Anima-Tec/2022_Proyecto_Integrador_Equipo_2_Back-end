import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type UpdateFoodInput = Pick<Prisma.FoodUpdateArgs, 'where' | 'data'>

const updateFoodMutation = async ({ where, data }: UpdateFoodInput) => {
  const isExist = await db.food.findUnique({ where })

  if (!isExist) throw 'Alimento no encontrado'

  const food = await db.food.update({
    where,
    data: {
      category: data.category,
      amount: data.amount,
      unitMeasurement: data.unitMeasurement,
    },
  })

  return dataFormater(food)
}

export { updateFoodMutation }
