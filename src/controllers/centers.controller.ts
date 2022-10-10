import { Request, Response } from 'express'
import { CenterService } from '../services/entities_services/centers.services'

class CenterController {
  static async getCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.getCenter({
        where: {
          id: req.params.id,
        },
      })

      if (center) {
        return res.status(200).send(center)
      }

      res.status(404).send({ error: 'Centro no encontrado' })
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }

  static async getCenters(_: Request, res: Response) {
    try {
      const centers = await CenterService.getCenters()

      if (centers.length) {
        return res.status(200).send(centers)
      }

      res.status(404).send({ error: 'Centros no encontrados' })
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }

  static async updateCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.updateCenter({
        data: req.body,
        where: { id: req.params.id },
      })

      res.status(200).send(center)
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }

  static async deleteCenter(req: Request, res: Response) {
    try {
      const center = await CenterService.deleteCenter({
        where: { id: req.params.id },
      })

      res.status(204).end()
    } catch (error) {
      console.log({ error })
      res.status(500).send({ message: error })
    }
  }
}

export { CenterController }
