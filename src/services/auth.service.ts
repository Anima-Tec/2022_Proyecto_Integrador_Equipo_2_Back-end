import { loginMutation } from '../auth/mutations/login'
import {
  CreateCenterInput,
  createCenterMutation,
} from '../centers/mutations/createCenter'
import {
  CreateDonatorInput,
  createDonatorMutation,
} from '../donators/mutations/createDonator'
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
