import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type DeleteDonatorInput = Pick<Prisma.DonatorDeleteArgs, 'where'>

const deleteDonatorMutation = async ({ where }: DeleteDonatorInput) => {
  const isExist = await db.user.findUnique({ where })

  if (!isExist) throw 'Donador no encontrado'

  const donator = await db.user.delete({
    where,
    include: {
      donator: true,
    },
  })

  return donator
}

export { deleteDonatorMutation }
