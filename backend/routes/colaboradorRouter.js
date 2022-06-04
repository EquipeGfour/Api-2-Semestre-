import { Router } from "express";
import { getAllColaborador, testeCargo, testePessoaFisica, inserirDadosColab, geralFunc, inserirDadosColabCnpj, getColaboradorById, pegarGestorById, updateColabForDelete, getDesligados, getHead, searchDesligado, dadosHistorico, GetEmail, redefinirSenha, searchColaborador, editColaborador } from "../controllers/colaboradorController.js";

import { verifyAdm, verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.get('/', verifyJWT, getAllColaborador)
router.get('/pessoa', verifyJWT, testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo', verifyJWT, inserirDadosColab)
router.get('/geral', verifyJWT, geralFunc)
router.post('/cnpj', verifyJWT, inserirDadosColabCnpj)
router.get('/funcionario/:id', verifyJWT, getColaboradorById)
router.get('/gestor/:id', verifyJWT, verifyAdm, pegarGestorById)
router.put('/updateColab/:id',verifyJWT, verifyAdm, updateColabForDelete)
router.get('/desligados', verifyJWT, verifyAdm, getDesligados)
router.get('/head', verifyJWT, getHead)
router.get('/searchDesligados', verifyJWT, verifyAdm, searchDesligado)
router.get('/historico/:id', verifyJWT, dadosHistorico)
router.post('/recuperar',GetEmail)
router.post('/redefinirSenha/:id', verifyJWT, redefinirSenha)
router.get('/searchColaborador', verifyJWT, searchColaborador)
router.put('/editColab/:id', verifyJWT, editColaborador)


export default router

