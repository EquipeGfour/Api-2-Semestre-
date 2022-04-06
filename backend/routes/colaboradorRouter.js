import { Router }  from "express";

import { getAllColaborador, testeCargo, testePessoaFisica } from "../controllers/colaborador.js";

const router = Router()

router.get('/', getAllColaborador)
router.get('/pessoa', testePessoaFisica)
router.get('/cargo', testeCargo)

export default router