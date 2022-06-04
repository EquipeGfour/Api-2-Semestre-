import { Router } from "express";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";
import { BuscarTrilhaColab, criarTrilha, getColabByTrilhaId, getTrilha, getTrilhaColab, getTrilhaID, updateTrilhaColab, vinculoTrilhaColab } from "../controllers/trilhaController.js";

const router = Router()

router.post('/criarTrilha', verifyJWT, verifyAdm, criarTrilha)
router.get('/getTrilha',verifyJWT,verifyAdm,getTrilha)
router.get('/getTrilhaID/:id',getTrilhaID)
router.get('/trilhaColaborador/:id', verifyJWT, getTrilhaColab)
router.put('/vincularTrilhaColab', verifyJWT, verifyAdm, vinculoTrilhaColab)
router.post('/updateColab', verifyJWT, verifyAdm, updateTrilhaColab)
router.get('/getColabByTrilhaId/:id',verifyJWT, verifyAdm, getColabByTrilhaId)


export default router