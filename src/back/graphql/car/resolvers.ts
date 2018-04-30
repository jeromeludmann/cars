import { carsCollection } from '@common/db'
import Cars from '@graphql/car/model'
import { Car, Filters, Paging } from '../../types'

export const cars = async function getCars({
  filters,
  paging
}: {
  filters: Filters
  paging: Paging
}): Promise<Car[]> {
  if (paging.page < 1) {
    throw new Error('Field "page" must be >= 1')
  }

  if (paging.perPage < 1) {
    throw new Error('Field "perPage" must be >= 1')
  }

  return Cars.find({ filters, paging })
}

export async function createCar({ car }: { car: Car }): Promise<Car> {
  return Cars.add(car)
}

export async function updateCar({
  name,
  car
}: {
  name: string
  car: Car
}): Promise<number> {
  return Cars.update(name, car)
}

export async function deleteCars({
  filters
}: {
  filters: Filters
}): Promise<number> {
  return Cars.delete(filters)
}
