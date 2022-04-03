import { Router }  from "express";

import { getAllColaborador, testePessoaFisica } from "../controllers/colaborador.js";

const router = Router()

router.get('/', getAllColaborador)
router.get('/pessoa', testePessoaFisica)

export default router