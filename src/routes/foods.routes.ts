import express from 'express'
import { FoodController } from '../controllers/food.controller'

const FoodRouter = express.Router()

FoodRouter.post('/centers/:centerId/foods', FoodController.createFood)

FoodRouter.get('/centers/:centerId/foods/:foodId', FoodController.getFood)

FoodRouter.get('/centers/:centerId/foods', FoodController.getFoods)

FoodRouter.patch('/centers/:centerId/foods/:foodId', FoodController.updateFood)

FoodRouter.delete('/centers/:centerId/foods/:foodId', FoodController.deleteFood)

export { FoodRouter }
