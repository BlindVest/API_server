import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('asdf')
  console.log('===========================')
  console.log(`어떤 놈이 접속했음: IP: ${req.ip}`)
  console.log('===========================')
})

export default router
