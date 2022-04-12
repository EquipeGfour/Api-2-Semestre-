import { Router }  from "express";

import { getAllColaborador, testeCargo, testePessoaFisica,inserirDadosColab, geralFunc} from "../controllers/colaborador.js";

import {verifyJWT} from "../controllers/login.js"

const router = Router()

router.get('/', verifyJWT, getAllColaborador)
router.get('/pessoa', verifyJWT, testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo', verifyJWT, inserirDadosColab)
router.get('/geral', verifyJWT,geralFunc)


export default router