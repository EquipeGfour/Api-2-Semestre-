import { Router } from "express";
import { insertPreRegistroCpf } from "../controllers/preRegistro.js";
import { insertPreRegistroCnpj } from "../controllers/preRegistro.js";
import {verifyJWT} from "../controllers/login.js"

const router = Router()

router.post('/cpf', verifyJWT, insertPreRegistroCpf)
router.post('/cnpj', verifyJWT, insertPreRegistroCnpj)

export default router;