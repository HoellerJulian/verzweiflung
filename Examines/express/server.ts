import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
   res.send('Hello from Express')
})

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`)
})