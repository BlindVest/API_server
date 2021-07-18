import { Request, Response } from 'express'

const main = (req: Request, res: Response) => {
  console.log(req.body)
  res.sendStatus(200)
}

export default main
