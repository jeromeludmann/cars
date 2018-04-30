import { GraphQLInputObjectType, GraphQLInt } from 'graphql'

export const PagingInput = new GraphQLInputObjectType({
  name: 'PagingInput',
  description: 'Describe paging parameters',
  fields: {
    page: {
      type: GraphQLInt,
      description: 'Number of the page',
      defaultValue: 1
    },
    perPage: {
      type: GraphQLInt,
      description: 'Number of items per page',
      defaultValue: 10
    }
  }
})
