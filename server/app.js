import express from 'express'
import { question } from './routes'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Every domain can access
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // Which headers accept
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS') // Which methods
    next()
  })
}

app.use('/api/questions', question)

export default app
