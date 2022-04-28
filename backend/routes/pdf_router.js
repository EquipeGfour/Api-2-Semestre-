import { Router } from "express";
import {PdfContrato} from '../controllers/pdfController.js';

const router = Router()

router.get('/gerarpdf',PdfContrato)

export default  router;

