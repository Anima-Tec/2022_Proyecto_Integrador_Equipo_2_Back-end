// import { dataFormater } from '../../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
import { FoodPrisma } from '../../utils/dataFormater'
const db = new PrismaClient()

export type GetFoodsInput = Pick<Prisma.NeedsFoodFindManyArgs, 'where'>

const getFoodsQuery = async ({ where }: GetFoodsInput) => {
  const foods = await db.needsFood.findMany({
    where,
    select: {
      food: true,
      amount: true,
      unitMeasurement: true,
    },
  })

  return foods.map(({ food: { ...dataFood }, ...restData }: FoodPrisma) => ({
    ...dataFood,
    ...restData,
  }))
}

export { getFoodsQuery }
