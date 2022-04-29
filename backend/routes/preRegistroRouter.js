import { Router } from "express";
import { insertPreRegistroCpf } from "../controllers/preRegistroController.js";
import { insertPreRegistroCnpj } from "../controllers/preRegistroController.js";
import {verifyJWT} from "../controllers/loginController.js"

const router = Router()

router.post('/cpf', verifyJWT, insertPreRegistroCpf)
router.post('/cnpj', verifyJWT, insertPreRegistroCnpj)

export default router;