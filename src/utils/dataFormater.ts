import { User } from '@prisma/client'
import { UnitMeasurementType } from '../interfaces/food.interface'

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FoodPrisma {
  food: {
    id: string
    name: string
  }
  foodId?: string
  centerId?: string
  amount: number
  unitMeasurement: UnitMeasurementType
}

// TODO: Refactor this using serializers
const dataFormater = (data: any) => {
  if (data) {
    const formattedObject = {}

    Object.entries(data).forEach(([key, value]: any) => {
      if (key.toLowerCase() !== 'hashedPassword'.toLowerCase()) {
        Object.assign(formattedObject, {
          [key]: value,
        })
      }

      if (key === 'user') {
        const { id, hashedPassword, ...dataWithoutIdAndPassword }: User = value
        Object.assign(formattedObject, { ...dataWithoutIdAndPassword })
      }

      if (key === 'foods' && value.length) {
        const foods = value.map(
          ({ food: { ...dataFood }, ...restData }: FoodPrisma) => ({
            ...dataFood,
            ...restData,
          }),
        )
        Object.assign(formattedObject, { foods })
      }

      if (key === 'zone') {
        const { department, ...zone } = value
        Object.assign(formattedObject, {
          [key]: zone,
        })
        Object.assign(formattedObject, {
          department,
        })
      }
    })

    return formattedObject
  }
}

export { dataFormater }
