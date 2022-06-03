import { Router } from 'express'
import { criarAula, listarAula, listarAulaID, verifyAulaEnd } from '../controllers/aulaController.js'
import { verifyAdm, verifyJWT } from '../controllers/loginController.js'

const router = Router()

router.post('/criarAula/:id', verifyJWT, verifyAdm, criarAula)
router.get('/listarAulas/:id', verifyJWT,listarAula)
router.get('/aulaById/:id', verifyJWT,listarAulaID)
router.put('/finalizarAula', verifyJWT, verifyAulaEnd)

export default router