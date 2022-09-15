import { UserCenter } from '../interfaces/center.interface'
import { createCenterMutation } from '../centers/mutations/createCenter'
import { getCentersQuery } from '../centers/queries/getCenters'
import { getCenterQuery, GetCenterInput } from '../centers/queries/getCenter'
import { deleteCenterMutation, DeleteCenterInput } from '../centers/mutations/deleteCenter'
import { updateCenterMutation, UpadteCenterInput, UpadteUserInput } from '../centers/mutations/updateCenter'

class CenterService {
  static async createCenter(data: UserCenter) {
    return await createCenterMutation(data)
  }

  static async deleteCenter({ where }: DeleteCenterInput) {
    return await deleteCenterMutation({ where })
  }

  static async updateCenter({ data, where }: UpadteCenterInput & UpadteUserInput) {
    return await updateCenterMutation({ data, where })
  }

  static async getCenter({ where }: GetCenterInput) {
    return await getCenterQuery({ where })
  }

  static async getCenters() {
    return await getCentersQuery()
  }
}

export { CenterService }
