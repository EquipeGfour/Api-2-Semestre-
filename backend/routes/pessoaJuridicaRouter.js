import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";
import { selectAllPj } from "../controllers/pessoaJuridica.js";

const router = Router();

router.get('/trazerEmpresas', verifyJWT, selectAllPj);

export default router;