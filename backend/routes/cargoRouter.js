import { Router } from "express";
import { getCargoColaborador } from "../controllers/colaborador.js";
import { inserirCargo } from "../controllers/insertCargo.js";
import { verifyJWT } from "../controllers/login.js";


const router = Router()

router.post('/insertCargo',verifyJWT,inserirCargo)
router.get('/getCargo/:id',verifyJWT,getCargoColaborador)
export default router