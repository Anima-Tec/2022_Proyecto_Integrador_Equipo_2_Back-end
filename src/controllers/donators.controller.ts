import { Request, Response } from 'express'
import { DonatorService } from '../services/donators.services'

class DonatorController {
  static async createDonator(req: Request, res: Response) {
    try {
      const donator = await DonatorService.createDonator(req.body)

      console.log(donator)
      res.status(201).send(donator)
    } catch (error: any) {
      console.error(error)
      res.status(500).send({ message: error })
    }
  }
  static async getDonator(req: Request, res: Response) {
    try {
      const donator = await DonatorService.getDonator({
        where: {
          id: req.params.id,
        },
      })

      if (donator) {
        console.log(donator)
        return res.status(200).send(donator)
      }

      res.status(404).send({ message: 'Donador no encontrado' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }
  static async updateDonator(req: Request, res: Response) {
    try {
      const donator = await DonatorService.updateDonator({
        data: req.body,
        where: { id: req.params.id },
      })

      console.log(donator)
      res.status(200).end()
    } catch (error: any) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }
  static async deleteDonator(req: Request, res: Response) {
    try {
      const donator = await DonatorService.deleteDonator({
        where: {
          id: req.params.id,
        },
      })

      if (donator) {
        console.log(donator)
        return res.status(200).end()
      }

      res.status(404).send({ error: 'Donador no encontrado' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error })
    }
  }
}

export { DonatorController }
