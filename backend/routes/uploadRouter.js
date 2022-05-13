import { Router } from "express";

import { upload } from "../functions/upload.js";
import { verifyJWT } from "../controllers/loginController.js";
import { dadosUpload, baixar, listarArquivos, downloadAws } from "../controllers/uploadController.js";


const router = Router();

router.get('/baixar/:id', verifyJWT, baixar);

router.post('/enviar/:id', verifyJWT, upload, dadosUpload);

router.get('/listarAquivos/:id', verifyJWT, listarArquivos);

router.get('/download/:id', verifyJWT, downloadAws)


export default router