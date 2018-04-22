import path from 'path'
import express, { Request, Response } from 'express'
import { config } from '@common/config'
import { startService } from '@common/service'

const servePreRenderedHtml = (req: Request, res: Response) => {
  res.render('html', { title: 'Cars' })
}

const catch404 = (req: Request, res: Response) => {
  res.status(404).send('<h1>Not found</h1>')
}

startService({
  port: Number(process.env.NODE_PORT) || config.ssr.port,
  settings: {
    'view engine': 'ejs',
    views: path.resolve('src', 'back', 'ssr')
  },
  routes: [
    {
      path: '/',
      handlers: servePreRenderedHtml
    },
    {
      handlers: catch404
    }
  ]
})
