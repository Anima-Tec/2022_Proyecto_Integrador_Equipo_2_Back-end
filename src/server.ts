import cors from 'cors'
import express, { Application } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { authRoutes, routes } from './routes'
import { validateToken } from './middlewares/validateToken'

export const app: Application = express()

/* For accepting post form data */
app.use(bodyParser.json({ limit: '10mb' }))

/* Allow access to selected resources from a server */
app.use(cors({}))

/* HTTP request Logger middleware (show HTTP request in console) */
app.use(morgan('dev'))

app.use('/api-alidar/auth', authRoutes)

app.use('/api-alidar', validateToken, routes)
