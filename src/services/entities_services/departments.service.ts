import {
  GetDepartmentInput,
  getDepartmentQuery,
} from '../../entitites/departments/getDepartment'
import { getDepartmentsQuery } from '../../entitites/departments/getDepartments'

class DepartmentsService {
  static async getDepartment({ where }: GetDepartmentInput) {
    return await getDepartmentQuery({ where })
  }

  static async getDepartments() {
    return await getDepartmentsQuery()
  }
}

export { DepartmentsService }
