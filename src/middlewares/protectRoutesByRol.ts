import { NextFunction, Request, Response } from 'express'
import { GetUserAuthInfoRequest } from '../interfaces/auth.interface'
import { UserType } from '../interfaces/user.interface'

const protectRoutesByRol = (rolType: UserType) => async (req: Request, res: Response, next: NextFunction) => {
  const { user } = await (req as GetUserAuthInfoRequest)

  if (
    user?.rol.toLowerCase() === rolType.toLowerCase() &&
    (user?.id === req.params.id || user?.id === req.params.centerId)
  ) {
    next()
    return
  }

  return res.status(401).send({ error: 'Unauthorized' })
}

export { protectRoutesByRol }
