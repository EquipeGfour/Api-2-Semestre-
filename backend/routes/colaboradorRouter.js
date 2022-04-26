import { Router }  from "express";
import { getAllColaborador, testeCargo, testePessoaFisica,inserirDadosColab, geralFunc,inserirDadosColabCnpj, getColaboradorById} from "../controllers/colaborador.js";

import {verifyJWT} from "../controllers/login.js";
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const { name, ext } = path.parse(file.originalname);

        cb(null, `${name}.${ext}`);
    }
});

const upload = multer({ storage })
const diretorio = multer({dest:'uploads/'})
const router = Router()

router.get('/', verifyJWT, getAllColaborador)
router.get('/pessoa', verifyJWT, testePessoaFisica)
router.get('/cargo', testeCargo)
router.post('/novo', verifyJWT, inserirDadosColab)
router.get('/geral', verifyJWT,geralFunc)
router.post('/cnpj', verifyJWT, inserirDadosColabCnpj)
router.get('/funcionario/:id',verifyJWT, getColaboradorById)


router.post('/upload', upload.array("arquivo",8), (req,res) => {
    const dados = req.body;
    res.json(dados);
});

export default router