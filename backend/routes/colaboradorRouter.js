import { Router }  from "express";

import { getAllColaborador, testeCargo, testePessoaFisica,inserirDadosColab } from "../controllers/colaborador.js";

const router = Router()

router.get('/', getAllColaborador)
router.get('/pessoa', testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo',inserirDadosColab)

export default router