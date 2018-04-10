import express from 'express'

import { jsonBodyParser } from 'Cars/back/api/middlewares'
import config from 'Cars/back/api/config'
import controllers from 'Cars/back/api/controllers'

const app: express.Application = express()

// middlewares
app.use('/', jsonBodyParser)

// routes
app.use('/', controllers)

// handle 404
app.get('*', (req, res) => {
  res.status(404).json({ success: true, message: 'Not found' })
})

const port = process.env.NODE_PORT || config.port
app.listen(port, () => {
  process.stdout.write(`API service is listening on port ${port}`)
})
