import { Food, User } from '@prisma/client'

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const dataFormater = (data: any) => {
  if (data) {
    const formattedObject = {}

    Object.entries(data).forEach(([key, value]: any) => {
      if (key === 'user') {
        const { id, hashedPassword, ...dataWithoutIdAndPassword }: User = value
        Object.assign(formattedObject, { ...dataWithoutIdAndPassword })
      } else if (key === 'foods' && value.length) {
        const foods = value.map(({ centerId, ...dataWithoutCenterId }: Food) => dataWithoutCenterId)
        Object.assign(formattedObject, { foods })
        // } else if (typeof value === 'object' && key !== 'photo') {
        //   const { id, ...dataWithoutId } = value
        //   Object.assign(formattedObject, { ...dataWithoutId })
      } else {
        if (key.toLowerCase() !== 'hashedPassword'.toLowerCase()) {
          Object.assign(formattedObject, {
            [key]: value,
          })
        }
      }
    })

    return formattedObject
  }
}

export { dataFormater }
