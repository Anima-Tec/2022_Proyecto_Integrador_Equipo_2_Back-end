import { UserType } from './user.interface'
import { Request } from 'express'

export interface AuthLogin {
  data: {
    email: string
    password: string
  }
}

export interface UserToToken {
  id: string
  rol: string
}

export interface GetUserAuthInfoRequest extends Request {
  user: {
    id: string
    rol: UserType
  }
}
