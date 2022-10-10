import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UserToToken } from '../interfaces/auth.interface'
dotenv.config()

const generateToken = async (data: UserToToken) => {
  // if (process.env.SECRET_TOKEN) {
  const token = jwt.sign(data, process.env.SECRET_TOKEN as string, {
    expiresIn: '7d',
  })

  return token
  // }
  // throw new Error('env SECRET_TOKEN is required')
}

export { generateToken }
