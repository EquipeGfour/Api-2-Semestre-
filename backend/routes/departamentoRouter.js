import { Router } from "express";
import { getCargosDepartamentos } from "../controllers/cargoController.js";
import { getAllDepartamento, inserirDepartamanto } from "../controllers/departamentoController.js";
import { verifyJWT } from "../controllers/login.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, inserirDepartamanto)
router.get('/allDepart/:id', verifyJWT, getCargosDepartamentos)
router.get('/getAllDepart', getAllDepartamento)

export default router