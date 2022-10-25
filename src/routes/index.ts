import { DonatorsRouter } from './donators.routes'
import { CentersRouter } from './centers.routes'
import { FoodRouter } from './foods.routes'
import { AuthRouter } from './auth.routes'
import { DepartmentsRouter } from './departments.routes'

export const routes = [
  DepartmentsRouter,
  DonatorsRouter,
  CentersRouter,
  FoodRouter,
]

export const publicRoutes = [DepartmentsRouter]

export const authRoutes = AuthRouter
