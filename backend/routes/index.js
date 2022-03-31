import  Express, { Router }  from "express";

import { getAllColaborador } from "../controllers/colaborador.js";

const router = Router()

router.get('/', getAllColaborador)

export default router