import express from 'express'
import bodyParser from 'body-parser'

export const jsonBodyParser: express.RequestHandler = bodyParser.json()
