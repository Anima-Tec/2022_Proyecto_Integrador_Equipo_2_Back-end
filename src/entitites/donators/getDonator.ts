import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type GetDonatorInput = Pick<Prisma.DonatorFindUniqueArgs, 'where'>

const getDonatorMutation = async ({ where }: GetDonatorInput) => {
  const donator = await db.donator.findUnique({
    where,
    include: {
      user: true,
    },
  })

  return dataFormater(donator)
}

export { getDonatorMutation }
