import { Router } from "express";
import { getCargosDepartamentos } from "../controllers/cargoController.js";
import { inserirDepartamanto } from "../controllers/departamentoController.js";
import { verifyJWT } from "../controllers/login.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, inserirDepartamanto)
router.get('/allDepart/:id', verifyJWT, getCargosDepartamentos)

export default router