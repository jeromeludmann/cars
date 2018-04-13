import express, { Application } from 'express'
import { dbClient } from '@api/db'
import { jsonBodyParser } from '@api/middlewares'
import asyncRouter from '@api/asyncRouter'
import errorHandler from '@api/errorHandler'
import config from '@api/config'

const app: Application = express()

app.use(jsonBodyParser)
app.use(asyncRouter)
app.use(errorHandler)

const port = Number(process.env.NODE_PORT) || config.port

dbClient.then(() =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
