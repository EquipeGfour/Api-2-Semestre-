import { Router } from 'express'
import { criarAula, listarAula, listarAulaID } from '../controllers/aulaController.js'
import { verifyAdm, verifyJWT } from '../controllers/loginController.js'

const router = Router()

router.post('/criarAula/:id', verifyJWT, verifyAdm, criarAula)
router.get('/listarAulas', verifyJWT,listarAula)
router.get('/listarAulas/:id', verifyJWT,listarAulaID)

export default router