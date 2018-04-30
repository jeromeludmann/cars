import { Car } from '@graphql/car/schema/types/Car'
import { CarInput } from '@graphql/car/schema/types/CarInput'

export const createCar = {
  type: Car,
  description: 'Create a car and return the created car name',
  args: {
    car: {
      type: CarInput,
      description: 'The car object to create'
    }
  }
}
