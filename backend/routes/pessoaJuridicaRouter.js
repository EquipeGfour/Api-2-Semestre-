import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";
import { selectAllPj, insertEmpresa, getEmpresaById, getAllColabEmpresa } from "../controllers/pessoaJuridicaController.js";

const router = Router();

router.get('/trazerEmpresas', verifyJWT, selectAllPj);

router.get('/buscarEmpresa/:id', verifyJWT, getEmpresaById)

router.get('/buscarColabEmpresa/:id', verifyJWT, getAllColabEmpresa)

router.post('/criarEmpresa', verifyJWT,insertEmpresa)

export default router;