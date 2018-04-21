import AsyncRouter from '@rest/asyncRouter'
import { addCar, getCars, removeCar } from '@rest/controllers'

const routes = AsyncRouter([
  {
    method: 'post',
    path: '/cars',
    handler: addCar
  },
  {
    method: 'get',
    path: '/cars',
    handler: getCars
  },
  {
    method: 'delete',
    path: '/cars/:name',
    handler: removeCar
  }
])

export default routes
