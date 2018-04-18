import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql'
import { carsCollection } from '@common/db'
import { CarType } from '@graphql/car/types'

export const carQuery = new GraphQLObjectType({
  name: 'CarQuery',
  description: 'Get cars',
  fields: {
    car: {
      type: CarType,
      description: 'Get a car',
      args: {
        name: {
          type: GraphQLString,
          description: 'Name of the car'
        },
        color: {
          type: GraphQLString,
          description: 'Color of the car'
        }
      },
      resolve: (_, criteria) => carsCollection.findOne(criteria)
    },
    cars: {
      type: new GraphQLList(CarType),
      description: 'Get cars',
      args: {
        skip: {
          type: GraphQLInt,
          defaultValue: 0,
          description: 'Number of cars skipped from the first'
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 10,
          description: 'Number of cars to retrieve'
        }
      },
      resolve: async (_, { skip, limit }) => {
        await new Promise(resolve => setTimeout(resolve, 1000)) // TODO remove me

        return carsCollection
          .find()
          .limit(limit)
          .skip(skip)
          .toArray()
      }
    }
  }
})
