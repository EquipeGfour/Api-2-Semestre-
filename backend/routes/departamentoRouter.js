import { Router } from "express";

import { inserirDepartamanto } from "../controllers/insertDepartamento.js";
import { verifyJWT } from "../controllers/login.js";

const router = Router()

router.post('/inserirDepart', verifyJWT, inserirDepartamanto)

export default router