import { Router } from 'express'
import { criarAula } from '../controllers/aulaController.js'
import { verifyAdm, verifyJWT } from '../controllers/loginController.js'

const router = Router()

router.post('/criarAula/:id', verifyJWT, verifyAdm, criarAula)

export default router