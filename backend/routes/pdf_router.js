import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";
import {PdfContrato} from '../controllers/pdfController.js';

const router = Router()

router.get('/gerarpdf', verifyJWT ,PdfContrato)

export default  router;
