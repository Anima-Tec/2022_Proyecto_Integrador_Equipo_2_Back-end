import { Request, Response } from 'express'
import { FoodService } from '../services/foods.services'

class FoodController {
  static async createFood(req: Request, res: Response) {
    try {
      const food = await FoodService.createFood({
        where: {
          id: req.params.centerId,
        },
        data: req.body,
      })

      console.log(food)
      res.status(201).send(food)
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: err })
    }
  }

  static async getFood(req: Request, res: Response) {
    try {
      const food = await FoodService.getFood({
        where: {
          id_centerId: {
            id: req.params.foodId,
            centerId: req.params.centerId,
          },
          // AND: [
          //   {
          //     id: req.params.foodId,
          //   },
          //   {
          //     centerId: req.params.centerId,
          //   },
          // ],
        },
      })

      if (food) {
        console.log(food)
        return res.status(200).send(food)
      }

      res.status(404).send({ message: 'Alimento no encontrado' })
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: err })
    }
  }

  static async getFoods(req: Request, res: Response) {
    try {
      const foods = await FoodService.getFoods({
        where: {
          centerId: req.params.centerId,
        },
      })

      if (foods.length) {
        console.log(foods)
        return res.status(200).send(foods)
      }

      res.status(404).send({ message: 'Alimentos no encontrados' })
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: err })
    }
  }

  static async updateFood(req: Request, res: Response) {
    try {
      const food = await FoodService.updateFood({
        where: {
          id_centerId: {
            id: req.params.foodId,
            centerId: req.params.centerId,
          },
        },
        data: req.body,
      })

      console.log(food)
      res.status(200).send(food)
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: err })
    }
  }

  static async deleteFood(req: Request, res: Response) {
    try {
      const food = await FoodService.deleteFood({
        where: {
          id_centerId: {
            id: req.params.foodId,
            centerId: req.params.centerId,
          },
        },
      })

      console.log(food)
      res.status(200).send(food)
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: err })
    }
  }
}

export { FoodController }
