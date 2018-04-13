import { Errback, Request, Response, NextFunction } from 'express'

interface CustomErrback extends Errback {
  message: string
  stack?: string
}

const handleNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.originalUrl}`
  })
}

const handleServerError = (err: CustomErrback, req: Request, res: Response) => {
  res.status(500)

  // For security reason,
  // we print stack trace in development mode
  // whilst we hide it in production.

  if (process.env.NODE_ENV === 'development') {
    res.send(`
    <html>
      <pre>${err.stack}</pre>
    </html>
  `)
  } else {
    res.json({ success: false, message: 'Server Error' })
  }

  console.error(err)
}

export default [handleNotFound, handleServerError]
