import { Router } from "express";
import { insertPreRegistro } from "../controllers/preRegistro.js";

const router = Router()

router.post('/', insertPreRegistro)

export default router;