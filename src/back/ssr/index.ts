import path from 'path'
import express from 'express'
import config from '@ssr/config'

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'back', 'ssr'))

// handle html routes
app.get('/', (req, res) => {
  res.render('html', { title: 'Cars' })
})

// handle 404
app.get('*', (req, res) => {
  res.status(404).send('<h1>Not found</h1>')
})

const port = process.env.NODE_PORT || config.port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
