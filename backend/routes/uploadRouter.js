import { Router } from "express";

import { upload } from "../functions/upload.js";
import { verifyJWT } from "../controllers/loginController.js";
import { dadosUpload, listarArquivos, downloadAws } from "../controllers/uploadController.js";


const router = Router();

router.post('/enviar/:id', verifyJWT, upload, dadosUpload);

router.get('/listarArquivos/:id', verifyJWT, listarArquivos);

router.get('/download/:id', verifyJWT, downloadAws)


export default router