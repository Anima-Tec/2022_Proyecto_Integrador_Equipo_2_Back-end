import { Request, Response } from 'express'
import { GoogleAuthCredentialDecoded, GoogleAuthData } from '../interfaces/auth.interface'
import { AuthService } from '../services/auth.service'
import { decodedToken } from '../utils/decodedToken'
import { hashPassword } from '../utils/hashPassword'

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      let userResponse

      if (req.body.isGoogleLogin) {
        const data = {
          name: (decodedToken(req.body.credential) as GoogleAuthCredentialDecoded).given_name,
          lastName: (decodedToken(req.body.credential) as GoogleAuthCredentialDecoded).family_name,
          email: (decodedToken(req.body.credential) as GoogleAuthCredentialDecoded).email,
        } as GoogleAuthData['data']
        userResponse = await AuthService.googleLogin({ data })
      } else {
        userResponse = await AuthService.simpleLogin({ data: req.body })
      }

      res.status(200).send(userResponse)
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }

  static async donatorSignup(req: Request, res: Response) {
    try {
      const { password, ...restData } = req.body

      const hashedPassword = await hashPassword(password)

      const data = {
        hashedPassword,
        ...restData,
      }

      const donator = await AuthService.donatorSignup({ data })

      console.log(donator)
      res.status(201).send(donator)
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }

  static async centerSignup(req: Request, res: Response) {
    try {
      const { password, ...restData } = req.body

      const hashedPassword = await hashPassword(password)

      const data = {
        hashedPassword,
        ...restData,
      }

      const center = await AuthService.centerSignup({ data })

      console.log(center)
      res.status(201).send(center)
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }
}

export { AuthController }
