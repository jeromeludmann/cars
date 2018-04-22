import express, { Application } from 'express'
import { GraphQLSchema, buildSchema } from 'graphql'
import graphqlHTTP from 'express-graphql'
import { dbClient } from '@common/db'
import { startService } from '@common/service'
import { config } from '@common/config'
import carSchema from '@graphql/car/schema'
import * as carResolvers from '@graphql/car/resolvers'

dbClient.then(() =>
  startService({
    port: Number(process.env.NODE_PORT) || config.graphql.port,
    routes: [
      {
        handlers: graphqlHTTP({
          schema: carSchema,
          rootValue: carResolvers,
          graphiql: config.graphql.graphiql
        })
      }
    ]
  })
)
