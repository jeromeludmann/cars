import { Request, Response } from 'express'
import { carsCollection } from '@api/db'

export const addCar = async (req: Request, res: Response) => {
  const car = req.body
  const result = await carsCollection.insertOne(car)
  res.status(201).json({ success: true, message: result })
}

export const getCars = async (req: Request, res: Response) => {
  const cars = await carsCollection.find().toArray()
  res.status(200).json({ success: true, message: cars })
}

export const removeCar = async (req: Request, res: Response) => {
  const result = await carsCollection.deleteOne({ name: req.params.name })
  res.status(204).end()
}
