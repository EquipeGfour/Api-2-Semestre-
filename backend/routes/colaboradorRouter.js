import { Router } from "express";
import { getAllColaborador, testeCargo, testePessoaFisica, inserirDadosColab, geralFunc, inserirDadosColabCnpj, getColaboradorById, pegarGestorById, updateColabForDelete, getDesligados, getHead, searchDesligado, dadosHistorico, GetEmail, redefinirSenha, searchColaborador } from "../controllers/colaboradorController.js";

import { verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.get('/', verifyJWT, getAllColaborador)
router.get('/pessoa', verifyJWT, testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo', verifyJWT, inserirDadosColab)
router.get('/geral', verifyJWT, geralFunc)
router.post('/cnpj', verifyJWT, inserirDadosColabCnpj)
router.get('/funcionario/:id', verifyJWT, getColaboradorById)
router.get('/gestor/:id', verifyJWT, pegarGestorById)
router.put('/updateColab/:id',verifyJWT, updateColabForDelete)
router.get('/desligados', verifyJWT, getDesligados)
router.get('/head', verifyJWT, getHead)
router.get('/searchDesligados', verifyJWT, searchDesligado)
router.get('/historico/:id', verifyJWT, dadosHistorico)
router.get('/recuperar/:id',GetEmail)
router.post('/redefinirSenha/:id',redefinirSenha)
router.get('/searchColaborador', verifyJWT, searchColaborador)
export default router

