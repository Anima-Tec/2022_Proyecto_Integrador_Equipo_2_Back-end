import express from 'express'
import { FoodController } from '../controllers/food.controller'
import { protectRoutesByRol } from '../middlewares/protectRoutesByRol'

const FoodRouter = express.Router()

FoodRouter.post(
  '/centers/:centerId/foods',
  protectRoutesByRol('CENTER'),
  FoodController.createFood,
)

FoodRouter.get(
  '/centers/:centerId/foods/:foodId',
  protectRoutesByRol('CENTER'),
  FoodController.getFood,
)

FoodRouter.get(
  '/centers/:centerId/foods',
  protectRoutesByRol('CENTER'),
  FoodController.getFoods,
)

FoodRouter.patch(
  '/centers/:centerId/foods/:foodId',
  protectRoutesByRol('CENTER'),
  FoodController.updateFood,
)

FoodRouter.delete(
  '/centers/:centerId/foods/:foodId',
  protectRoutesByRol('CENTER'),
  FoodController.deleteFood,
)

export { FoodRouter }
