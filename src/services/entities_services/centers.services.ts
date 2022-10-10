import { CreateCenterInput, createCenterMutation } from '../../entitites/centers/createCenter'
import { getCentersQuery } from '../../entitites/centers/getCenters'
import { getCenterQuery, GetCenterInput } from '../../entitites/centers/getCenter'
import { deleteCenterMutation, DeleteCenterInput } from '../../entitites/centers/deleteCenter'
import { updateCenterMutation, UpadteCenterInput, UpadteUserInput } from '../../entitites/centers/updateCenter'

class CenterService {
  static async createCenter({ data }: CreateCenterInput) {
    return await createCenterMutation({ data })
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
