import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const getCentersQuery = async () => {
  const centers = await db.center.findMany({
    include: { user: true, foods: true },
  })

  // TO-DO: change the type any to center type with foods
  return centers
    .filter(
      (center: any) => center.foods.length || center.numberVolunteersRequired,
    )
    .map((center: any) => dataFormater(center))
}

export { getCentersQuery }
