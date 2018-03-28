import path from 'path'
import express from 'express'
import { port } from 'Config/app.json'
import api from 'Server/api'

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'server'))

// add middlewares
app.use('/assets', express.static(path.resolve('dist', 'assets')))

// handle html routes
app.get('/', (req, res) => {
  res.render('html', { title: 'Cars' })
})

// plug API
app.use('/api', api)

// handle 404
app.get('*', (req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Server ready on http://localhost:${port}`)
})
