import { simpleLoginMutation } from '../auth/simpleLogin'
import { googleLoginMutation } from '../auth/googleLogin'
import { CreateCenterInput, createCenterMutation } from '../centers/mutations/createCenter'
import { CreateDonatorInput, createDonatorMutation } from '../donators/mutations/createDonator'
import { AuthLogin, GoogleAuthData } from '../interfaces/auth.interface'

class AuthService {
  static async simpleLogin({ data }: AuthLogin) {
    return await simpleLoginMutation({ data })
  }

  static async googleLogin({ data }: GoogleAuthData) {
    return await googleLoginMutation({ data })
  }

  static async donatorSignup({ data }: CreateDonatorInput) {
    return await createDonatorMutation({ data })
  }
  static async centerSignup({ data }: CreateCenterInput) {
    return await createCenterMutation({ data })
  }
}

export { AuthService }
