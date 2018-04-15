import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from 'express'
import { endpoints } from '@rest/endpoints'

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
