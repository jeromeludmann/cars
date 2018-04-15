import express, { Application } from 'express'
import graphqlHTTP from 'express-graphql'
import { carSchema } from '@graphql/car'
import { dbClient } from '@common/db'
import { startService } from '@common/service'
import config from '@common/config'

dbClient.then(() =>
  startService({
    port: Number(process.env.NODE_PORT) || config.graphql.port,
    routes: [{ handlers: graphqlHTTP({ schema: carSchema, graphiql: true }) }]
  })
)
