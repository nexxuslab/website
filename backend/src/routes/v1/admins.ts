import { Router } from 'express'

import { create, list, get, update, remove, enable, access } from 'controllers/admins'
import { verify } from 'controllers/auth'
import { check_token } from 'middleware/token'

const router = Router()
router.post('/', create)
router.get('/', check_token(true), list)
router.get('/:email', check_token(true), get)
router.put('/:email', check_token(true), update)
router.delete('/:email', check_token(true), remove)
router.get('/verify', check_token(true), verify)
router.put('/:email/enable', check_token(true), enable)
router.get('/:email/access', check_token(true), access)
router.get('/access', check_token(true), access)

export default router
