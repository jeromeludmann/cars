// @flow
import path from 'path'
import type { $Application, $Request, $Response, Middleware } from 'express'
import express from 'express'
import config from 'Cars/services/ssr/config'

const app: $Application = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'services', 'ssr'))

// handle html routes
app.get('/', (req: $Request, res: $Response, next: Middleware) => {
  res.render('html', { title: 'Cars' })
})

// handle 404
app.get('*', (req: $Request, res: $Response, next: Middleware) => {
  res.status(404).send('<h1>Not found</h1>')
})

const port = Number(process.env.NODE_PORT) || config.port
app.listen(port, () => {
  console.log(`SSR service is listening on port ${port}`)
})
