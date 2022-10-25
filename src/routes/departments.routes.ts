import express from 'express'
import { DepartmentsController } from '../controllers/departments.controller'

const DepartmentsRouter = express.Router()

DepartmentsRouter.get('/departments/:id', DepartmentsController.getDepartment)

DepartmentsRouter.get('/departments', DepartmentsController.getDepartments)

export { DepartmentsRouter }
