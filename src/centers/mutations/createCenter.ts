import { UserCenter } from '../../interfaces/center.interface'
import { dataFormater } from '../../utils/dataFormater'

import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const createCenterMutation = async (data: UserCenter) => {
  const isExist = await db.user.findUnique({ where: { email: data.email } })

  if (isExist) throw 'Ya existe un usuario con el mismo email, por favor ingrese otro'

  const center = await db.user.create({
    data: {
      rol: 'CENTER',
      name: data.name,
      email: data.email,
      hashedPassword: data.email,
      center: {
        create: {
          phone: data.phone,
          numberVolunteersRequired: data.numberVolunteersRequired ?? 0,
          street: data.street,
          zone: data.zone,
          numberDoor: data.numberDoor,
          departament: data.departament,
          description: data.description ?? undefined,
          photo: data.photo ?? undefined,
        },
      },
    },
    include: {
      center: true,
    },
  })

  return dataFormater(center)
}

export { createCenterMutation }
