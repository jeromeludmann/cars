import { GraphQLInt, GraphQLString } from 'graphql'
import { CarInput } from '@graphql/car/schema/types/CarInput'

export const updateCar = {
  type: GraphQLInt,
  description: 'Update a car',
  args: {
    name: { type: GraphQLString },
    car: { type: CarInput }
  }
}
