import path from 'path'
import express from 'express'
import { port } from '../../cars.config.json' // TODO fix relative path

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

// add middlewares
app.use(
  '/assets',
  express.static(path.resolve(__dirname, '..', '..', 'dist', 'assets')) // TODO fix relative path
)

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
