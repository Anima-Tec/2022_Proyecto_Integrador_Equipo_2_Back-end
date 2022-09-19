import { GetUserAuthInfoRequest } from '../interfaces/auth.interface'
import { Request, Response, NextFunction } from 'express'

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Authorization: [0]Bearer <token>[1]
    const authorization = await req.header('authorization')

    const accessToken = authorization && authorization.toLowerCase().startsWith('bearer') && authorization.split(' ')[1]

    if (!accessToken) return res.status(401).send({ message: 'Invalid token' })

    jwt.verify(accessToken, process.env.SECRET_TOKEN ?? 'secret', (err: any, decoded: any) => {
      if (err)
        return res.status(401).json(err)

        // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(req as GetUserAuthInfoRequest).user = decoded // create req
      next()
    })
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
}

export { validateToken }
