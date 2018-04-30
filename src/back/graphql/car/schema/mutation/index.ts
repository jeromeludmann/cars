import { GraphQLObjectType } from 'graphql'
import { createCar } from '@graphql/car/schema/mutation/createCar'
import { updateCar } from '@graphql/car/schema/mutation/updateCar'
import { deleteCars } from '@graphql/car/schema/mutation/deleteCars'

export const Mutation = new GraphQLObjectType({
  name: 'CarMutation',
  description: 'Creating, updating and deleting cars',
  fields: {
    createCar,
    updateCar,
    deleteCars
  }
})
