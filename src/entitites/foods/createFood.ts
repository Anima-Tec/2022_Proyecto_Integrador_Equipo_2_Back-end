import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type CreateFoodInput = Pick<Prisma.CenterUpdateArgs, 'where'> &
  Pick<Prisma.FoodCreateArgs, 'data'> &
  Pick<Prisma.NeedsFoodCreateArgs, 'data'>

const createFoodMutation = async ({ data, where }: CreateFoodInput) => {
  const center = await db.center.update({
    where,
    data: {
      foods: {
        create: {
          amount: data.amount,
          unitMeasurement: data.unitMeasurement,
          food: {
            create: {
              name: data.name,
              category: data.category,
            },
          },
        },
      },
    },
    select: {
      foods: {
        select: {
          centerId: true,
          food: true,
          amount: true,
          unitMeasurement: true,
        },
      },
    },
  })

  return dataFormater(center)
}

export { createFoodMutation }
