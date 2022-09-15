// import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type GetFoodsInput = Pick<Prisma.FoodFindManyArgs, 'where'>

const getFoodsQuery = async ({ where }: GetFoodsInput) => {
  const foods = await db.food.findMany({
    where,
  })

  return foods.map(({ centerId, ...dataWithoutCenterId }) => dataWithoutCenterId)
}

export { getFoodsQuery }
