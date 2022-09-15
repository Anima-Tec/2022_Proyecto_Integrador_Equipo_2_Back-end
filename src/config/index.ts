import { app as server } from '../server'
import dotenv from 'dotenv'
dotenv.config()

// server port
const PORT = process.env.PORT ?? 4000

const startServer = () => {
  server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}

startServer()
