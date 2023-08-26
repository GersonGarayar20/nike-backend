import './config/dotenv'

import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { connectMongo } from './config/mongo'

void connectMongo()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

const PORT = process.env.PORT ?? 4000
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
