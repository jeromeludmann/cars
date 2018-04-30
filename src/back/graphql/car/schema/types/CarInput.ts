import { GraphQLInputObjectType, GraphQLString } from 'graphql'

export const CarInput = new GraphQLInputObjectType({
  name: 'CarInput',
  description: 'Describe a user input',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})
