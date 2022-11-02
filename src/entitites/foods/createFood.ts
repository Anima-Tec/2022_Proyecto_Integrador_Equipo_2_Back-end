import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type CreateFoodInput = Pick<Prisma.CenterUpdateArgs, 'where'> &
  Pick<Prisma.FoodCreateArgs, 'data'> &
  Pick<Prisma.NeedsFoodCreateArgs, 'data'>

const createFoodMutation = async ({ data, where }: CreateFoodInput) => {
  const centerFoods = await db.center.findUnique({
    where,
    include: { foods: { include: { food: true } } },
  })

  const foodIsExist = centerFoods?.foods.find(
    ({ food }) => food.name.toLowerCase() === data.name.toLowerCase(),
  )

  if (foodIsExist) throw `Ya exisite el alimento ${data.name}`

  const food = await db.food.create({
    data: {
      name: data.name,
      needsFood: {
        create: {
          amount: Number(data.amount),
          unitMeasurement: data.unitMeasurement,
          center: {
            connect: {
              id: where.id,
            },
          },
        },
      },
      statistics: {
        create: {
          center: {
            connect: {
              id: where.id,
            },
          },
        },
      },
    },
  })

  return dataFormater(food)
}

export { createFoodMutation }
