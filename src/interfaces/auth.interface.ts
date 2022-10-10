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

export interface GoogleAuthData {
  data: {
    clientId: string
    name: string
    lastName: string
    email: string
  }
}

export interface GoogleAuthCredentialDecoded {
  iss: string
  nbf: number
  aud: string
  sub: string
  email: string
  email_verified: boolean
  azp: string
  name: string
  picture: string
  given_name: string
  family_name: string
  iat: number
  exp: number
  jti: string
}
