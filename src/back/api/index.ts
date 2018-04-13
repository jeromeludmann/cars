import express from 'express'
import { dbClient } from '@api/db'
import { jsonBodyParser } from '@api/middlewares'
import config from '@api/config'
import routes from '@api/routes'

const app: express.Application = express()

// add middlewares
app.use(jsonBodyParser)

// add routes
app.use(routes)

// add 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.originalUrl}`
  })
})

const port = Number(process.env.NODE_PORT) || config.port

dbClient.then(() =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
