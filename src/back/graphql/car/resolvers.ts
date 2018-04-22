import { carsCollection } from '@common/db'
import { ObjectID } from 'bson'

export interface Car {
  name: string
  color: string
}

export interface Filters {
  name?: string
  color?: string
}

export interface Paging {
  page: number
  perPage: number
}

export const cars = async function getCars({
  filters,
  paging
}: {
  filters: Filters
  paging: Paging
}): Promise<Car[]> {
  if (paging.page < 1) {
    throw new Error('Field "page" must be <= 1')
  }

  if (paging.perPage < 1) {
    throw new Error('Field "perPage" must be <= 1')
  }

  const offset = (paging.page - 1) * paging.perPage

  return await carsCollection
    .find(filters)
    .skip(offset)
    .limit(paging.perPage)
    .toArray()
}

export async function createCar({ car }: { car: Car }): Promise<any> {
  return (await carsCollection.insertOne(car)).ops[0]
}

export async function createCars({
  cars: newCars
}: {
  cars: Car[]
}): Promise<any[]> {
  return (await carsCollection.insertMany(newCars)).ops
}

export async function updateCar({
  name,
  car
}: {
  name: string
  car: Car
}): Promise<number | undefined> {
  return (await carsCollection.findOneAndUpdate(
    { name },
    { ...(await carsCollection.findOne({ name })), ...car }
  )).ok
}

export async function deleteCars({
  filters
}: {
  filters: Filters
}): Promise<number> {
  return (await carsCollection.deleteMany(filters)).deletedCount || 0
}
