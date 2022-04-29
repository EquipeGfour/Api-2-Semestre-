import { Router } from "express";
import { getAllDepartamento, getCargosDepartamentos, inserirDepartamanto } from "../controllers/departamentoController.js";
import { verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, inserirDepartamanto)
router.get('/allDepart/:id', verifyJWT, getCargosDepartamentos)
router.get('/getAllDepart', verifyJWT, getAllDepartamento)

export default router