import bcrypt from 'bcrypt'
import { AuthLogin, UserToToken } from '../interfaces/auth.interface'
import { generateToken } from '../utils/generateToken'

import { PrismaClient } from '@prisma/client'
import { dataFormater } from '../utils/dataFormater'
const db = new PrismaClient()

const simpleLoginMutation = async ({ data }: AuthLogin) => {
  const errorMessage = 'La direccion de correo electronico o la contraseña que has introducido no son correctas'

  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (!user || !user.hashedPassword) throw errorMessage

  const validPassword = await bcrypt.compare(data.password, user.hashedPassword as string)

  if (!validPassword) throw errorMessage

  const userToToken: UserToToken = {
    id: user.id,
    rol: user.rol,
  }

  const accessToken = await generateToken(userToToken)

  return { ...dataFormater(user), accessToken }
}

export { simpleLoginMutation }
