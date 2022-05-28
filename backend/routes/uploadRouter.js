import { Router } from "express";

import { upload, uploadVideo } from "../functions/upload.js";
import { verifyJWT } from "../controllers/loginController.js";
import { dadosUpload, listarArquivos, downloadAws, videosUpload } from "../controllers/uploadController.js";


const router = Router();

router.post('/enviar/:id', verifyJWT, upload, dadosUpload);

router.get('/listarArquivos/:id', verifyJWT, listarArquivos);

router.get('/download/:id', verifyJWT, downloadAws)

router.post('/uploadVideo/:id', verifyJWT, uploadVideo, videosUpload);


export default router