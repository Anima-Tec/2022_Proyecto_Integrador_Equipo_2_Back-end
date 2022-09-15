import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type GetFoodInput = Pick<Prisma.FoodFindUniqueArgs, 'where'>

const getFoodQuery = async ({ where }: GetFoodInput) => {
  const food = await db.food.findUnique({
    where,
  })

  return dataFormater(food)
}

export { getFoodQuery }
