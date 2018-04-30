import { GraphQLObjectType } from 'graphql'
import { getCars } from '@graphql/car/schema/query/getCars'

export const Query = new GraphQLObjectType({
  name: 'CarQuery',
  description: 'Getting cars',
  fields: {
    cars: getCars
  }
})
