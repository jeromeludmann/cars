import express, { RequestHandler, ErrorRequestHandler } from 'express'

type ExpressRequestHandler = RequestHandler | ErrorRequestHandler

interface Settings {
  [key: string]: string
}

interface Route {
  path?: string
  handlers: ExpressRequestHandler | ExpressRequestHandler[]
}

interface ServiceConfig {
  port: number
  settings?: Settings
  routes: Route[]
}

export const startService = ({ port, settings, routes }: ServiceConfig) => {
  const app = express()

  if (settings) {
    for (const key of Object.keys(settings)) {
      app.set(key, settings[key])
    }
  }

  for (const route of routes) {
    app.use(route.path || '/', route.handlers)
  }

  app.listen(port, () => console.log(`Listening on port ${port}`))
}
