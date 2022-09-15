import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type CreateFoodInput = Pick<Prisma.CenterUpdateArgs, 'where'> & Pick<Prisma.FoodCreateArgs, 'data'>

const createFoodMutation = async ({ data, where }: CreateFoodInput) => {
  const food = await db.center.update({
    where,
    data: {
      foods: {
        create: data,
      },
    },
    include: {
      foods: true,
    },
  })

  return dataFormater(food)
}

export { createFoodMutation }
