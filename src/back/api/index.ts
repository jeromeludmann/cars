import express from 'express'

import { jsonBodyParser } from '@api/middlewares'
import config from '@api/config'
import controllers from '@api/controllers'

const app: express.Application = express()

// middlewares
app.use(jsonBodyParser)

// routes
app.use(controllers)

// handle 404
app.get('*', (req, res) => {
  res.status(404).json({ success: true, message: 'Not found' })
})

const port = Number(process.env.NODE_PORT) || config.port
app.listen(port, () => {
  process.stdout.write(`API service is listening on port ${port}`)
})
