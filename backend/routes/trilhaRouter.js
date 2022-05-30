import { Router } from "express";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";
import { criarTrilha, getTrilha, getTrilhaID } from "../controllers/trilhaController.js";

const router = Router()

router.post('/criarTrilha',verifyJWT,verifyAdm,criarTrilha)
router.get('/getTrilha',verifyJWT,verifyAdm,getTrilha)
router.get('/getTrilhaID/:id',getTrilhaID)

export default router