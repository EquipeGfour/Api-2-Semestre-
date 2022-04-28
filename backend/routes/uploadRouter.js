import { Router } from "express";

import { upload } from "../functions/upload.js";
import { verifyJWT } from "../controllers/login.js";
import { dadosUpload, baixar, listarArquivos } from "../controllers/uploadController.js";

const router = Router()

router.get('/baixar/:id', verifyJWT, baixar)

router.post('/enviar/:id', verifyJWT, upload.array("arquivo",8), dadosUpload);

router.get('/listarAquivos/:id', verifyJWT, listarArquivos)

export default router