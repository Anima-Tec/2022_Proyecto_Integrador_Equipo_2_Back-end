import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

type GetCenterInput = Pick<Prisma.CenterFindUniqueArgs, 'where'>

const getCenterQuery = async ({ where }: GetCenterInput) => {
  const center = await db.center.findUnique({
    where,
    include: {
      user: true,
      zone: {
        include: {
          department: true,
        },
      },
      foods: {
        select: {
          food: true,
          amount: true,
          unitMeasurement: true,
        },
      },
    },
  })

  return dataFormater(center)
}

export { getCenterQuery, GetCenterInput }
