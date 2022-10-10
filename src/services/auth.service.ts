import { loginMutation } from '../auth/login'
import {
  CreateCenterInput,
  createCenterMutation,
} from '../entitites/centers/createCenter'
import {
  CreateDonatorInput,
  createDonatorMutation,
} from '../entitites/donators/createDonator'
import { AuthLogin } from '../interfaces/auth.interface'

class AuthService {
  static async login({ data }: AuthLogin) {
    return await loginMutation({ data })
  }
  static async donatorSignup({ data }: CreateDonatorInput) {
    return await createDonatorMutation({ data })
  }
  static async centerSignup({ data }: CreateCenterInput) {
    return await createCenterMutation({ data })
  }
}

export { AuthService }
