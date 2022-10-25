import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type UpdateFoodInput = Pick<
  Prisma.NeedsFoodUpdateArgs,
  'where' | 'data'
> &
  Pick<Prisma.FoodUpdateArgs, 'where' | 'data'>

const updateFoodMutation = async ({ where, data }: UpdateFoodInput) => {
  const isExist = await db.needsFood.findUnique({ where })

  console.log(data)

  if (!isExist) throw 'Alimento no encontrado'

  const food = await db.needsFood.update({
    where,
    data: {
      amount: Number(data.amount),
      unitMeasurement: data.unitMeasurement,
      food: {
        update: {
          name: data.name,
          category: data.category,
        },
      },
    },
  })

  return dataFormater(food)
}

export { updateFoodMutation }
