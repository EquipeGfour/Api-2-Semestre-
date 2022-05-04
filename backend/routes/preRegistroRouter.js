import { Router } from "express";
import { getCargo, getDepartCargo, insertPreRegistroCpf } from "../controllers/preRegistroController.js";
import { insertPreRegistroCnpj } from "../controllers/preRegistroController.js";
import {verifyJWT} from "../controllers/loginController.js"

const router = Router()

router.post('/cpf', verifyJWT, insertPreRegistroCpf)
router.post('/cnpj', verifyJWT, insertPreRegistroCnpj)
router.get('/allDepartCargos', verifyJWT, getDepartCargo)
router.post('/criar',getCargo)

export default router;