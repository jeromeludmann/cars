import { GraphQLInt } from 'graphql'
import { FiltersInput } from '@graphql/car/schema/types/FiltersInput'

export const deleteCars = {
  type: GraphQLInt,
  description: 'Delete cars by filter query and return number of cars deleted',
  args: {
    filters: {
      type: FiltersInput,
      description: 'The filter query of the cars to delete'
    }
  }
}
