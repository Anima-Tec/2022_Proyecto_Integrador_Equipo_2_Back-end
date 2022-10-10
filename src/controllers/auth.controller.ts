import { Request, Response } from 'express'
import { AuthService } from '../services/auth.service'
import { hashPassword } from '../utils/hashPassword'

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const user = await AuthService.login({ data: req.body })

      res.status(200).send(user)
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

      res.status(201).send(center)
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }
}

export { AuthController }
