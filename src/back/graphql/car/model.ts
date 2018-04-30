import { carsCollection } from '@common/db'
import { Filters, Paging, Car } from '../../types'

export default {
  async find({
    filters,
    paging
  }: {
    filters: Filters
    paging: Paging
  }): Promise<Car[]> {
    const offset = (paging.page - 1) * paging.perPage
    const cars = await carsCollection
      .find(filters)
      .skip(offset)
      .limit(paging.perPage)
      .toArray()
    return cars
  },

  async add(car: Car): Promise<Car> {
    return (await carsCollection.insertOne(car)).ops[0]
  },

  async update(carName: string, car: Car): Promise<number> {
    const existing = await carsCollection.findOne({ name })
    const updateResults = await carsCollection.findOneAndUpdate(
      { name },
      { ...existing, ...car }
    )
    return updateResults.ok || 0
  },

  async delete(filters: Filters): Promise<number> {
    const deleteResults = await carsCollection.deleteMany(filters)
    return deleteResults.deletedCount || 0
  }
}
