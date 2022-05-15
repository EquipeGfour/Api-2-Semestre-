import { Router } from "express";
import { deleteDepart, getAllDepartamento, getCargosDepartamentos, inserirDepartamanto } from "../controllers/departamentoController.js";
import { verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, inserirDepartamanto)
router.get('/allDepart/:id', verifyJWT, getCargosDepartamentos)
router.get('/getAllDepart', verifyJWT, getAllDepartamento)
router.delete('/delDepart/:id', verifyJWT ,deleteDepart)

export default router