import { Router } from 'express'
import { main } from './api'

const router = Router()

router.get('/', main)

export default router
