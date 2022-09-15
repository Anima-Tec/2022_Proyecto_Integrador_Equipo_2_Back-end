import express from 'express'
import { DonatorController } from '../controllers/donators.controller'

const DonatorsRouter = express.Router()

DonatorsRouter.post('/donators', DonatorController.createDonator)

DonatorsRouter.get('/donators/:id', DonatorController.getDonator)

DonatorsRouter.patch('/donators/:id', DonatorController.updateDonator)

DonatorsRouter.delete('/donators/:id', DonatorController.deleteDonator)

export { DonatorsRouter }
