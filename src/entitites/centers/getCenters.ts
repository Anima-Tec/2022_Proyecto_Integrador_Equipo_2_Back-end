import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const getCentersQuery = async () => {
  const centers = await db.center.findMany({
    include: {
      user: true,
      foods: true,
      zone: {
        include: { department: true },
      },
    },
  })

  // TO-DO: change the type any to center type with foods
  const filteredCentersWithNeeds = centers
    .filter(
      (center: any) =>
        center.foods.length > 0 || center.numberVolunteersRequired !== 0,
    )
    .map((center: any) => dataFormater(center))

  return filteredCentersWithNeeds
}

export { getCentersQuery }
