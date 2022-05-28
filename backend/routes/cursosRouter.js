import { criarCursos, listarcursoID, listarCursos } from "../controllers/cursosController.js";
import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/criarCurso', verifyJWT, criarCursos)
router.get('/listarCursos', verifyJWT, listarCursos)
router.get('/listarCurso/:id', verifyJWT, listarcursoID)

export default router