import { Router } from "express";
import { insertPreRegistroCpf } from "../controllers/preRegistro.js";
import { insertPreRegistroCnpj } from "../controllers/preRegistro.js";

const router = Router()

router.post('/cpf', insertPreRegistroCpf)
router.post('/cnpj', insertPreRegistroCnpj)

export default router;