import express, { Application } from 'express'
import asyncRouter from '@rest/asyncRouter'
import errorHandler from '@rest/errorHandler'
import { dbClient } from '@common/db'
import { jsonBodyParser } from '@rest/middlewares'
import { startService } from '@common/service'
import config from '@common/config'

dbClient.then(() =>
  startService({
    port: Number(process.env.NODE_PORT) || config.rest.port,
    routes: [{ handlers: [jsonBodyParser, asyncRouter, ...errorHandler] }]
  })
)
