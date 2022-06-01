import { Router } from "express";

import { upload, uploadMateriais } from "../functions/upload.js";
import { verifyJWT } from "../controllers/loginController.js";
import { dadosUpload, listarArquivos, downloadAws, UploadAulaMaterials, listarAulaArquivos, aulaMateriaisUpload } from "../controllers/uploadController.js";


const router = Router();

router.post('/enviar/:id', verifyJWT, upload, dadosUpload);

router.get('/listarArquivos/:id', verifyJWT, listarArquivos);

router.get('/download/:id', verifyJWT, downloadAws);

router.post('/uploadMateriais/:id', verifyJWT, uploadMateriais, aulaMateriaisUpload);

router.get('/listarVideos/:id', verifyJWT, listarAulaArquivos); // não está sendo usado

export default router