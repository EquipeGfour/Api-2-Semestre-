import { criarCursos } from "../controllers/cursosController.js";
import { Router } from "express";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/criarCurso', verifyJWT, verifyAdm, criarCursos)

export default router