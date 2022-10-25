import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const getDepartmentsQuery = async () => {
  const departments = await db.department.findMany({
    include: {
      zones: true,
    },
  })

  return departments
}

export { getDepartmentsQuery }
