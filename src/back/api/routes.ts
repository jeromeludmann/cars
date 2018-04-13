import { Router } from 'express'
import { addCar, getCars, removeCar } from '@api/controllers'

const router = Router()

router.post('/cars', addCar)
router.get('/cars', getCars)
router.delete('/cars/:name', removeCar)

export default router
