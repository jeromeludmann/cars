import { GraphQLList } from 'graphql'
import { Car } from '@graphql/car/schema/types/Car'
import { FiltersInput } from '@graphql/car/schema/types/FiltersInput'
import { PagingInput } from '@graphql/car/schema/types/PagingInput'

export const getCars = {
  type: new GraphQLList(Car),
  description: 'Get cars',
  args: {
    filters: {
      type: FiltersInput,
      description: 'Filter by search criteria'
    },
    paging: {
      type: PagingInput,
      description: 'Paginate the results',
      defaultValue: {
        page: 1,
        perPage: 10
      }
    }
  }
}
