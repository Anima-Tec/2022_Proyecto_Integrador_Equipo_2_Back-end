import bcrypt from 'bcrypt'

const hashPassword = async (password: string) => {
  try {
    const saltRounds = await bcrypt.genSalt(10)

    return await bcrypt.hash(password, saltRounds)
  } catch (error) {
    console.error(error)
  }
}

export { hashPassword }
