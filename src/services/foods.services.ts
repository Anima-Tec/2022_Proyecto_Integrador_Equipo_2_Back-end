import { CreateFoodInput, createFoodMutation } from '../foods/mutations/createFood'
import { DeleteFoodInput, deleteFoodMutation } from '../foods/mutations/deleteFood'
import { UpdateFoodInput, updateFoodMutation } from '../foods/mutations/updateFood'
import { GetFoodInput, getFoodQuery } from '../foods/queries/getFood'
import { GetFoodsInput, getFoodsQuery } from '../foods/queries/getFoods'

class FoodService {
  static async createFood({ data, where }: CreateFoodInput) {
    return await createFoodMutation({ data, where })
  }

  static async deleteFood({ where }: DeleteFoodInput) {
    return await deleteFoodMutation({ where })
  }

  static async updateFood({ data, where }: UpdateFoodInput) {
    return await updateFoodMutation({ data, where })
  }

  static async getFood({ where }: GetFoodInput) {
    return await getFoodQuery({ where })
  }

  static async getFoods({ where }: GetFoodsInput) {
    return await getFoodsQuery({ where })
  }
}

export { FoodService }
