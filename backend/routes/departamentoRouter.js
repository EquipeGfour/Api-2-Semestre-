import { Router } from "express";
import { deleteDepart, getAllDepartamento, getCargosDepartamentos, inserirDepartamanto, searchDepartamento } from "../controllers/departamentoController.js";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, verifyAdm, inserirDepartamanto)
router.get('/allDepart/:id', verifyJWT, getCargosDepartamentos)
router.get('/getAllDepart', verifyJWT, getAllDepartamento)
router.delete('/delDepart/:id', verifyJWT , verifyAdm, deleteDepart)
router.get('/searchDepartamento', verifyJWT ,searchDepartamento)

export default router