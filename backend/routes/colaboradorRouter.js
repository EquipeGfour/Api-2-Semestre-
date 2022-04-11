import { Router }  from "express";

import { getAllColaborador, testeCargo, testePessoaFisica,inserirDadosColab, geralFunc} from "../controllers/colaborador.js";

const router = Router()

router.get('/', getAllColaborador)
router.get('/pessoa', testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo',inserirDadosColab)
router.get('/geral', geralFunc)
export default router