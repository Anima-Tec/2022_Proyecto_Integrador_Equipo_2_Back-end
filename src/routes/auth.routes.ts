import express from 'express'
import { AuthController } from '../controllers/auth.controller'

const AuthRouter = express.Router()

AuthRouter.post('/signup/center', AuthController.centerSignup)

AuthRouter.post('/signup/donator', AuthController.donatorSignup)

AuthRouter.post('/login', AuthController.login)

export { AuthRouter }
