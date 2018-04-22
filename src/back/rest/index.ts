import express, { Application } from 'express'
import { dbClient } from '@common/db'
import { startService } from '@common/service'
import { config } from '@common/config'
import { jsonBodyParser } from '@rest/middlewares'
import errorHandler from '@rest/errorHandler'
import routes from '@rest/routes'

dbClient.then(() =>
  startService({
    port: Number(process.env.NODE_PORT) || config.rest.port,
    routes: [{ handlers: [jsonBodyParser, routes, ...errorHandler] }]
  })
)
