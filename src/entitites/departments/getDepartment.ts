import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient()

export type GetDepartmentInput = Pick<Prisma.DepartmentFindUniqueArgs, 'where'>

const getDepartmentQuery = async ({ where }: GetDepartmentInput) => {
  const department = await db.department.findUnique({
    where,
    include: {
      zones: true,
    },
  })

  return department
}

export { getDepartmentQuery }
