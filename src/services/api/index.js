import express from 'express'

import { jsonBodyParser } from 'Cars/services/api/middlewares'
import controllers from 'Cars/services/api/controllers'
import config from 'Cars/services/api/config'

const app = express()

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
  console.log(`API service is listening on port ${port}`)
})
