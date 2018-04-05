import path from 'path'
import express from 'express'

import api from 'Cars/server/api'

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'server'))

// add middlewares
// ...

// handle html routes
app.get('/', (req, res) => {
  res.render('html', { title: 'Cars' })
})

// plug API
app.use('/api', api)

// handle 404
app.get('*', (req, res) => {
  res.status(404).send('<h1>Not found</h1>')
})

app.listen(process.env.NODE_PORT, () => {
  console.log(`API server is listening on ${process.env.NODE_PORT}`)
})
