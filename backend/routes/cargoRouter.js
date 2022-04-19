import { Router } from "express";
import { inserirCargo } from "../controllers/insertCargo.js";
import { verifyJWT } from "../controllers/login.js";



const router = Router()

router.post('/insertCargo',verifyJWT,inserirCargo)

export default router