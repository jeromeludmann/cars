import { GraphQLObjectType, GraphQLString } from 'graphql'

export const Car = new GraphQLObjectType({
  name: 'Car',
  description: 'Describe a car',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})
