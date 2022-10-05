import { CreateFoodInput, createFoodMutation } from '../../entitites/foods/createFood'
import { DeleteFoodInput, deleteFoodMutation } from '../../entitites/foods/deleteFood'
import { UpdateFoodInput, updateFoodMutation } from '../../entitites/foods/updateFood'
import { GetFoodInput, getFoodQuery } from '../../entitites/foods/getFood'
import { GetFoodsInput, getFoodsQuery } from '../../entitites/foods/getFoods'

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
