import { GraphQLSchema } from 'graphql'
import { carQuery } from '@graphql/car/query'
import { carMutation } from '@graphql/car/mutation'

export const carSchema = new GraphQLSchema({
  query: carQuery,
  mutation: carMutation
})
