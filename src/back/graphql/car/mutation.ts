import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLInt
} from 'graphql'
import { FindAndModifyWriteOpResultObject } from 'mongodb'
import { carsCollection } from '@common/db'
import { CarType, CarInputType } from '@graphql/car/types'

export const carMutation = new GraphQLObjectType({
  name: 'CarMutation',
  description: 'Add or update cars',
  fields: {
    addCar: {
      type: CarType,
      description: 'Add a car',
      args: {
        name: { type: GraphQLString },
        color: { type: GraphQLString }
      },
      resolve: async (_, car) => (await carsCollection.insertOne(car)).ops[0]
    },
    updateCar: {
      type: GraphQLInt,
      description: 'Update a car',
      args: {
        name: { type: GraphQLString },
        car: { type: CarInputType }
      },
      resolve: async (_, { name, car }) => {
        const existing = await carsCollection.findOne({ name })
        return (await carsCollection.findOneAndUpdate(
          { name },
          { ...existing, ...car }
        )).ok
      }
    },
    removeCar: {
      type: GraphQLInt,
      description: 'Remove a car',
      args: {
        name: {
          type: GraphQLString,
          description: 'The name of the car to delete',
          defaultValue: '*'
        }
      },
      resolve: async (_, { name }) => {
        return (await carsCollection.findOneAndDelete({ name })).ok
      }
    }
  }
})
