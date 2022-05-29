import { Router } from "express";
import { verifyJWT } from "../controllers/loginController.js";
import { PdfContrato } from '../controllers/pdfController.js';
import { PdfDadosColab } from '../controllers/pdfDadosColab.js';
const router = Router()

router.get('/gerarpdf' ,PdfContrato)
router.get('/gerarpdfDados' ,PdfDadosColab)

export default  router;
