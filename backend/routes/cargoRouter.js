import { Router } from "express";
import { getCargosDepartamentos } from "../controllers/cargoController.js";
import { getCargoColaborador } from "../controllers/colaborador.js";
import { inserirCargo } from "../controllers/insertCargo.js";
import { verifyJWT } from "../controllers/login.js";


const router = Router()

router.post('/insertCargo',verifyJWT,inserirCargo)
router.get('/getCargo/:id',verifyJWT,getCargosDepartamentos)
export default router