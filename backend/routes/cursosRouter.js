import { criarCursos } from "../controllers/cursosController.js";
import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/criarCurso', verifyJWT, criarCursos)

export default router