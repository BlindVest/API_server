import { Router } from 'express'
import { main } from './api'

const router = Router()

router.post('/', main)

export default router
