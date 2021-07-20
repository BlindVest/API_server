import { Request, Response } from 'express'

const main = (req: Request, res: Response) => {
  console.log(req.body.distance)
  console.log(req.body.latitude)
  console.log(req.body.longitude)
  res.sendStatus(200)
}

export default main
