import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type DeleteCenterInput = Pick<Prisma.CenterDeleteArgs, 'where'>

const deleteCenterMutation = async ({ where }: DeleteCenterInput) => {
  const isExist = await db.user.findUnique({ where })

  if (!isExist) throw 'Centro no encontrado'

  const center = await db.center.findUnique({ where, include: { foods: true } })

  if (center && center.foods.length) {
    await db.needsFood.deleteMany({ where: { centerId: where.id } })

    for (const food of center.foods) {
      await db.food.delete({ where: { id: food.foodId } })
    }
  }

  const centerDeleted = await db.user.delete({
    where,
    include: {
      center: true,
    },
  })

  return dataFormater(centerDeleted)
}

export { deleteCenterMutation }
