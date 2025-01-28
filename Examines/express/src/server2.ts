import express, { NextFunction, Request, Response } from 'express'

const app = express()
const port = 3000

function logging(req: Request, res: Response, next: NextFunction) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
  const method = req.method
  const path = req.path
  const timestamp = new Date().toISOString()
  console.log(`${timestamp} ${ip} ${method} ${path}`)

  next()
}

function authorized(req: Request, res: Response, next: NextFunction) {
  const query = req.query
  if (query.token && query.token === "authorized") {
    next()
    return
  }
  res.status(403).send("you are not authorized to access this location")
}

app.use(logging)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express')
})

app.use(authorized)

app.get('/secured', (req: Request, res: Response) => {
  res.send('This is a secured endpoint')
})

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`)
})

//https://youtu.be/lY6icfhap2o