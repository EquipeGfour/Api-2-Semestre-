import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";
import { PdfContrato } from '../controllers/pdfController.js';
import { PdfDadosColab } from '../controllers/pdfDadosColab.js';
const router = Router()

router.get('/gerarpdf', verifyJWT ,PdfContrato)
router.get('/gerarpdfDados', verifyJWT ,PdfDadosColab)

export default  router;
