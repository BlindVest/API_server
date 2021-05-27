import { Router } from 'express'
import { main } from './v1'

const router = Router()

router.get('/v1/', main)

export default router
