import { Router } from "express";
import { inserirCargo } from "../controllers/cargoController.js";
import { verifyJWT } from "../controllers/loginController.js";
import { deletarAll } from "../controllers/deleteAll.js";
import { getCargosDepartamentos } from "../controllers/departamentoController.js";

const router = Router()

router.post('/insertCargo/:id',verifyJWT,inserirCargo)
router.get('/getCargo/:id',verifyJWT,getCargosDepartamentos)
router.delete('/getDeleteCargo/:id',verifyJWT,deletarAll)
export default router