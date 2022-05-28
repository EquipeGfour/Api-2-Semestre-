import { Router } from "express";
import { getCargo, getDepartCargo, getGestores, insertPreRegistroCpf } from "../controllers/preRegistroController.js";
import { insertPreRegistroCnpj } from "../controllers/preRegistroController.js";
import {verifyAdm, verifyJWT} from "../controllers/loginController.js"

const router = Router()

router.post('/cpf', verifyJWT, verifyAdm, insertPreRegistroCpf)
router.post('/cnpj', verifyJWT, verifyAdm, insertPreRegistroCnpj)
router.get('/allDepartCargos', verifyJWT, verifyAdm, getDepartCargo)
router.post('/criar', getCargo)
router.get('/gestores/:id', verifyJWT, verifyAdm, getGestores)

export default router;