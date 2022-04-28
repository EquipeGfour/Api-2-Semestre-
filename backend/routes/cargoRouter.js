import { Router } from "express";
import { getCargosDepartamentos } from "../controllers/cargoController.js";
import { getCargoColaborador } from "../controllers/colaborador.js";
import { inserirCargo } from "../controllers/insertCargo.js";
import { verifyJWT } from "../controllers/login.js";
import { deletarAll } from "../controllers/deleteAll.js";

const router = Router()

router.post('/insertCargo/:id',verifyJWT,inserirCargo)
router.get('/getCargo/:id',verifyJWT,getCargosDepartamentos)
router.delete('/getDeleteCargo/:id',verifyJWT,deletarAll)
export default router