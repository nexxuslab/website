import { Router } from 'express'

import admins from 'routes/v1/admins'
import { login } from 'controllers/auth'

const router = Router()
router.post('/login', login)
router.use('/profile', admins)

export default router
