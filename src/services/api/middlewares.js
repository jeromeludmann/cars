// @flow
import type { Middleware } from 'express'

import bodyParser from 'body-parser'

export const jsonBodyParser: Middleware = bodyParser.json()
