import { Router } from 'express'
import { jsonBodyParser } from 'Server/middlewares'

// controllers

const mockedCars = {
  boumbo: { name: 'boumbo', color: 'yellow' },
  vroum: { name: 'vroum', color: 'red' }
}

export const getCar = (req, res) => {
  const { name } = req.params
  const foundCar = mockedCars[name]

  if (!foundCar) {
    res.status(403).json({
      success: false,
      message: `Car not found: ${name}`
    })
  } else {
    res.status(200).json({ success: true, data: { car: foundCar } })
  }
}

export const getCars = (req, res) => {
  res.status(200).json({ success: true, data: { cars: mockedCars } })
}

export const addCar = (req, res) => {
  const { name, color } = req.body

  if (mockedCars[name]) {
    res.status(400).json({
      success: false,
      message: `The car ${name} already exists`
    })
  } else {
    const car = { name, color }
    mockedCars[name] = car
    res.status(201).json({
      success: true,
      message: `The car ${name} has been successfully created`,
      data: { car }
    })
  }
}

export const removeCar = (req, res) => {
  const { name } = req.params

  if (!mockedCars[name]) {
    res.status(400).json({ success: false, message: `Car ${name} not found` })
  } else {
    delete mockedCars[name]
    res.status(200).json({
      success: true,
      message: `The car ${name} has been successfully removed`
    })
  }
}

const router = Router()

// middlewares
router.use(jsonBodyParser)

// routes
router.get('/cars/:name', getCar)
router.get('/cars', getCars)
router.post('/cars', addCar)
router.delete('/cars/:name', removeCar)

// 404 catcher
router.use('*', (req, res, nex) => {
  res.status(404).json({ message: 'Route not found' })
})

export default router
