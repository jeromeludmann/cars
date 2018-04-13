import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from 'express'
import { PathParams } from 'express-serve-static-core'
import { endpoints } from '@api/endpoints'
import { getCars } from '@api/controllers'

const asyncRouter = Router()

const catchAsyncErrors = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise.resolve(fn(req, res, next)).catch(next)

for (const { method, path, handler } of endpoints) {
  asyncRouter[method](path, catchAsyncErrors(handler))
}

export default asyncRouter
