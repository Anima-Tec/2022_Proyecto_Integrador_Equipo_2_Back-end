import { Request, Response } from 'express'
import { DepartmentsService } from '../services/entities_services/departments.service'

class DepartmentsController {
  static async getDepartment(req: Request, res: Response) {
    try {
      const department = await DepartmentsService.getDepartment({
        where: {
          id: req.params.id,
        },
      })

      if (!department) {
        res.status(404).send({ message: 'Departamento no encontrado' })
      }

      res.status(200).send(department)
    } catch (error) {
      console.log(error)
    }
  }
  static async getDepartments(_req: Request, res: Response) {
    try {
      const departments = await DepartmentsService.getDepartments()

      if (!departments.length) {
        res.status(404).send({ message: 'Departamentos no encontrados' })
      }

      res.status(200).send(departments)
    } catch (error) {
      console.log(error)
    }
  }
}

export { DepartmentsController }
