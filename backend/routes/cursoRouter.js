import { criarCursos, listarcursoID, listarCursos } from "../controllers/cursosController.js";
import { Router } from "express";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/criarCurso/:id', verifyJWT, verifyAdm, criarCursos)
router.get('/listarCursos/:id', verifyJWT, listarCursos)
router.get('/cursoById/:id', verifyJWT, listarcursoID)

export default router