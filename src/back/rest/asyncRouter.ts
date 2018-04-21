import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from 'express'
import { PathParams } from 'express-serve-static-core'

export interface Route {
  method?: 'post' | 'get' | 'put' | 'delete'
  path?: PathParams
  handler: RequestHandler
}

const catchAsyncErrors = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise.resolve(fn(req, res, next)).catch(next)

const AsyncRouter = (routes: Route[]) => {
  const asyncRouter = Router()

  for (const { method, path, handler } of routes) {
    asyncRouter[method || 'use'](path || '/', catchAsyncErrors(handler))
  }

  return asyncRouter
}

export default AsyncRouter
