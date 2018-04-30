import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { Query } from '@graphql/car/schema/query'
import { Mutation } from '@graphql/car/schema/mutation'

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
