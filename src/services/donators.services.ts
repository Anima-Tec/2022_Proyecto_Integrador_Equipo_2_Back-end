import { createDonatorMutation } from '../donators/mutations/createDonator'
import { DeleteDonatorInput, deleteDonatorMutation } from '../donators/mutations/deleteDonator'
import { UpdateDonatorInput, updateDonatorMutation } from '../donators/mutations/updateDonator'
import { GetDonatorInput, getDonatorMutation } from '../donators/queries/getDonator'
import { Donator } from '../interfaces/donator.interface'

class DonatorService {
  static async createDonator(data: Donator) {
    return await createDonatorMutation(data)
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
