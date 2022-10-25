import jwt from 'jsonwebtoken'

const decodedToken = (token: string) => {
  try {
    return jwt.decode(token)
  } catch (err) {
    console.error(err)
  }
}

export { decodedToken }
