import { Router } from "express";

import { upload, uploadArquivosAula, uploadVideo } from "../functions/upload.js";
import { verifyAdm, verifyJWT } from "../controllers/loginController.js";
import { dadosUpload, listarArquivos, downloadAws, videosUpload, listarAulaArquivos, uploadMateriaisAula, DonwloadID, getVideo } from "../controllers/uploadController.js";


const router = Router();
router.post('/enviar/:id', verifyJWT, upload, dadosUpload);
router.get('/listarArquivos/:id', verifyJWT, listarArquivos);

router.get('/download/:id', verifyJWT, downloadAws);

router.post('/uploadVideo/:id', verifyJWT, uploadVideo, videosUpload);

router.get('/listarAulasCursos/:id', verifyJWT, listarAulaArquivos);

router.post('/uploadMaterialAula/:id', uploadArquivosAula, uploadMateriaisAula);

router.get('/downloadArquivos/:id', DonwloadID );

router.get('/assistirAula/:id',verifyJWT, getVideo)


export default router