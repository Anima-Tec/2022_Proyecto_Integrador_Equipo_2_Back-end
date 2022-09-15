import { Request, Response } from 'express'
import { CenterService } from '../services/centers.services'

class CenterController {
  static async createCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.createCenter(req.body)

      console.log(center)
      res.status(201).send(center)
    } catch (error: any) {
      console.log(error)

      res.status(500).send({ message: error })
    }
  }

  static async getCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.getCenter({
        where: {
          id: req.params.id,
        },
      })

      if (center) {
        console.log(center)
        return res.status(200).send(center)
      }

      res.status(404).send({ error: 'Centro no encontrado' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }

  static async getCenters(_: Request, res: Response) {
    try {
      const centers = await CenterService.getCenters()

      if (centers.length) {
        console.log(centers)
        return res.status(200).send(centers)
      }

      res.status(404).send({ error: 'Centros no encontrados' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }

  static async updateCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.updateCenter({
        data: req.body,
        where: { id: req.params.id },
      })

      console.log(center)
      return res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }

  static async deleteCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.deleteCenter({
        where: { id: req.params.id },
      })

      console.log(center)
      return res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }
}

export { CenterController }
