import { Router } from "express";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";
import { upload } from "../functions/upload.js";
import { verifyJWT } from "../controllers/login.js";
import { dadosUpload } from "../controllers/uploadController.js";


const router = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(path.basename(__filename))
const caminhoArquivo = path.join(__dirname + '/uploads');


router.get('/baixar', (req,res)=>{
    res.download(caminhoArquivo + '/teste.txt', (err)=>{
        if(err){
            res.json(err)
        }
    })
})

router.post('/enviar/:id', verifyJWT, upload.array("arquivo",8), dadosUpload);


export default router