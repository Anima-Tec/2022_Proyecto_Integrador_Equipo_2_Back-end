import express from 'express'
import { DonatorController } from '../controllers/donators.controller'
import { protectRoutesByRol } from '../middlewares/protectRoutesByRol'

const DonatorsRouter = express.Router()

DonatorsRouter.get('/donators/:id', protectRoutesByRol('DONATOR'), DonatorController.getDonator)

DonatorsRouter.patch('/donators/:id', protectRoutesByRol('DONATOR'), DonatorController.updateDonator)

DonatorsRouter.delete('/donators/:id', protectRoutesByRol('DONATOR'), DonatorController.deleteDonator)

export { DonatorsRouter }
