import { PathParams } from 'express-serve-static-core'
import { RequestHandler } from 'express'
import { addCar, getCars, removeCar } from '@rest/controllers'

interface Endpoint {
  method: 'post' | 'get' | 'delete'
  path: PathParams
  handler: RequestHandler
}

export const endpoints: Endpoint[] = [
  { method: 'post', path: '/cars', handler: addCar },
  { method: 'get', path: '/cars', handler: getCars },
  { method: 'delete', path: '/cars/:name', handler: removeCar }
]
