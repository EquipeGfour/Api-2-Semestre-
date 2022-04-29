import { Router } from "express";
import { verify } from "../controllers/loginController.js";

const router = Router()

router.post('/', verify)

export default router;