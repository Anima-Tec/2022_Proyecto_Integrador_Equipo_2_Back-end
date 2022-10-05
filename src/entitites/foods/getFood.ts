import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type GetFoodInput = Pick<Prisma.NeedsFoodFindUniqueArgs, 'where'>

const getFoodQuery = async ({ where }: GetFoodInput) => {
  const food = await db.needsFood.findUnique({
    where,
    select: {
      food: true,
      amount: true,
      unitMeasurement: true,
    },
  })

  return dataFormater(food)
}

export { getFoodQuery }
