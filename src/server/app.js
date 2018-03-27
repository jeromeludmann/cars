import path from 'path'
import express from 'express'
import { port } from 'Config/app.json'

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'server', 'templates'))

// add middlewares
app.use('/assets', express.static(path.resolve('dist', 'client')))

// handle routes
app.get('/', (req, res) => {
  res.render('car-view', { title: 'Cars' })
})

// handle 404
app.get('*', (req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Server ready on http://localhost:${port}`)
})
