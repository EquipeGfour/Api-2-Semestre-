import { Router } from "express";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";
import { criarTrilha, getTrilha, getTrilhaColab, getTrilhaID, vinculoTrilhaColab } from "../controllers/trilhaController.js";

const router = Router()

router.post('/criarTrilha',verifyJWT,verifyAdm,criarTrilha)
router.get('/getTrilha',verifyJWT,verifyAdm,getTrilha)
router.get('/getTrilhaID/:id',getTrilhaID)
router.get('/trilhaColaborador/:id', verifyJWT, getTrilhaColab)
router.put('/vincularTrilhaColab', verifyJWT, verifyAdm, vinculoTrilhaColab)

export default router