import { GoogleAuthData, UserToToken } from '../interfaces/auth.interface'
import { generateToken } from '../utils/generateToken'
import { dataFormater } from '../utils/dataFormater'

import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const googleLoginMutation = async ({ data }: GoogleAuthData) => {
  const user = await db.user.findUnique({
    where: {
      email: data?.email,
    },
  })

  if (user && user.hashedPassword) {
    throw 'Ya existe un usuario normal con el mismo email'
  }

  let donatorCreated

  if (!user) {
    donatorCreated = await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        rol: 'DONATOR',
        donator: {
          create: {
            lastName: data.lastName,
          },
        },
      },
    })
  }
  const userToToken: UserToToken = {
    id: (user?.id as string) ?? donatorCreated?.id,
    rol: (user?.rol as string) ?? donatorCreated?.rol,
  }

  const accessToken = await generateToken(userToToken)
  return { ...dataFormater(user ?? donatorCreated), accessToken }
}

export { googleLoginMutation }
