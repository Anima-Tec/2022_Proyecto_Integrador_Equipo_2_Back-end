import express from 'express'
import { CenterController } from '../controllers/centers.controller'

const CentersRouter = express.Router()

CentersRouter.post('/centers', CenterController.createCenter)

CentersRouter.get('/centers/:id', CenterController.getCenter)

CentersRouter.get('/centers', CenterController.getCenters)

CentersRouter.patch('/centers/:id', CenterController.updateCenter)

CentersRouter.delete('/centers/:id', CenterController.deleteCenter)

export { CentersRouter }
