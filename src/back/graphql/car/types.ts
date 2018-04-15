import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType
} from 'graphql'

export const CarType = new GraphQLObjectType({
  name: 'Car',
  description: 'Describe a car',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})

export const CarInputType = new GraphQLInputObjectType({
  name: 'CarInput',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})
