import path from 'path'
import express from 'express'

const app = express()

// configure template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('src', 'server', 'ssr'))

// handle html routes
app.get('/', (req, res) => {
  res.render('html', { title: 'Cars' })
})

// handle 404
app.get('*', (req, res) => {
  res.status(404).send('<h1>Not found</h1>')
})

app.listen(process.env.NODE_PORT, () => {
  console.log(`SSR service is listening on port ${process.env.NODE_PORT}`)
})
