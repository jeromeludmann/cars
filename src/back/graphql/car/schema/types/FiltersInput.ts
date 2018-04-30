import { GraphQLInputObjectType, GraphQLString } from 'graphql'

export const FiltersInput = new GraphQLInputObjectType({
  name: 'FiltersInput',
  description: 'Describe search filters',
  fields: {
    name: { type: GraphQLString, description: 'Filter by car name' },
    color: { type: GraphQLString, description: 'Filter by car color' }
  }
})
