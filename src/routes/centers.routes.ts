import express from 'express'
import { CenterController } from '../controllers/centers.controller'
import { protectRoutesByRol } from '../middlewares/protectRoutesByRol'

const CentersRouter = express.Router()

CentersRouter.get('/centers/:id', CenterController.getCenter)

CentersRouter.get('/centers', CenterController.getCenters)

CentersRouter.patch(
  '/centers/:id',
  protectRoutesByRol('CENTER'),
  CenterController.updateCenter,
)

CentersRouter.delete(
  '/centers/:id',
  protectRoutesByRol('CENTER'),
  CenterController.deleteCenter,
)

export { CentersRouter }
