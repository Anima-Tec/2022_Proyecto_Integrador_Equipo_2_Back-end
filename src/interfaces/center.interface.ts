import { User } from './user.interface'

export interface UserCenter extends Center, User {}

export interface Center {
  phone: string
  numberVolunteersRequired: number | null
  street: string
  zone: string
  numberDoor: string
  departament: string
  description: string | null
  photo: string | null
}
