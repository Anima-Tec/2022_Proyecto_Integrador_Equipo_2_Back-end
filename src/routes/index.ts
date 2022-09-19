import { DonatorsRouter } from './donators.routes'
import { CentersRouter } from './centers.routes'
import { FoodRouter } from './foods.routes'
import { AuthRouter } from './auth.routes'

export const routes = [DonatorsRouter, CentersRouter, FoodRouter]

export const authRoutes = AuthRouter
