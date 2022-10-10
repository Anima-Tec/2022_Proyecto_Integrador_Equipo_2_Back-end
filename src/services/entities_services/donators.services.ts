import { CreateDonatorInput, createDonatorMutation } from '../../entitites/donators/createDonator'
import { DeleteDonatorInput, deleteDonatorMutation } from '../../entitites/donators/deleteDonator'
import { UpdateDonatorInput, updateDonatorMutation } from '../../entitites/donators/updateDonator'
import { GetDonatorInput, getDonatorMutation } from '../../entitites/donators/getDonator'

class DonatorService {
  static async createDonator({ data }: CreateDonatorInput) {
    return await createDonatorMutation({ data })
  }

  static async deleteDonator({ where }: DeleteDonatorInput) {
    return await deleteDonatorMutation({ where })
  }

  static async updateDonator({ data, where }: UpdateDonatorInput) {
    return await updateDonatorMutation({ data, where })
  }

  static async getDonator({ where }: GetDonatorInput) {
    return await getDonatorMutation({ where })
  }
}

export { DonatorService }
