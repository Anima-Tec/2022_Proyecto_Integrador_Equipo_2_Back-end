import { Center } from '../../interfaces/center.interface'
import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const getCentersQuery = async () => {
  const centers: Center[] = await db.center.findMany()

  return centers.map((center: Center) => dataFormater(center))
}

export { getCentersQuery }
