import { Router } from "express";
import { verify } from "../controllers/login.js";

const router = Router()

router.post('/', verify)

export default router;