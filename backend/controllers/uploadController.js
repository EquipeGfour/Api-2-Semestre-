import aws from 'aws-sdk';
import { armazenarAulaMaterials, dadosArquivoBaixar, inserirArquivo, pegarArquivoById, pegarDadosArquivo } from "../service/uploadService.js";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";
import fs from "fs"
import Arquivos from '../models/arquivos.js';
import Aula from '../models/aula.js';
import { Op } from "sequelize";



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(path.basename(__filename))
const caminhoArquivo = path.join(__dirname + '/uploads');

export const dadosUpload = async (req,res) => {
    
    try{
        const documentos = req.files.documento??[]        
        const certificados = req.files.certificado??[]
        const comprovantes = req.files.comprovante??[]
        const dados = [...documentos, ...certificados, ...comprovantes]
        
        const salvos =  await Promise.all(dados.map(async file=> {

            let nomeDados = ''

            if(file.key){
                nomeDados = file.key
            }else{
                nomeDados = file.filename
            }

            const { name, ext } = path.parse(nomeDados);

            const id = req.params.id
            const infoUpload = await inserirArquivo(name,ext,id,file.fieldname)
            return {infoUpload,tipo:file.fieldname}
        }))
        res.json(salvos)
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const listarArquivos = async (req,res) => {
    try{
        const ColabID = req.params.id
        const dados = await pegarDadosArquivo(ColabID)
        res.status(202).json(dados)
    }catch(error){
        res.status(500).json({ message:error})
    }
}

export const downloadAws = async (req,res) => {
    try{
        const dados = await dadosArquivoBaixar(req.params.id,req.params.colaborador_id)
        console.log(dados)
        if(dados.url_arquivo){

            const arquivo = `${dados.nome_arquivos}${dados.extensao}`
            const s3 = new aws.S3();
            const options = {
                Bucket: process.env.BUCKET_NAME,
                Key: arquivo,
            };  
            
            res.attachment(arquivo);
            var fileStream = s3.getObject(options).createReadStream();
            fileStream.pipe(res);
            
        }
        else{
            const idArquivo = req.params.id
            const dados = await pegarArquivoById(idArquivo)
            res.download(caminhoArquivo + `/${dados.nome_arquivos}${dados.extensao}`)
        }

    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const videosUpload = async (req,res) => {
    try{
        const video = req.files.video
        const file = video[0]
        let nomeDados = ''
            if(file.key){
                nomeDados = file.key
            }else{
                nomeDados = file.filename
            }
            const { name, ext } = path.parse(nomeDados);
        let url_arquivo = ''
        if (process.env.STORAGE_TYPE === 's3'){
            url_arquivo =  `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${name}${ext}`
        }
        const dados = await Arquivos.create({
            nome_arquivos:name,
            url_arquivo:url_arquivo,
            extensao:ext,
            aula_id:req.params.id,
            tipo:'video'
            })
        res.json(dados)
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const listarAulaArquivos = async (req,res) => {
    try{
        const dados = await Aula.findAll({
            where:{
                curso_id:req.params.id
            },
            include:{
                model:Arquivos,
                where:{
                    tipo:{
                        [Op.or]:['material', 'video']
                    }
                    
                },

                
            }

        })
        res.status(202).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const uploadMateriaisAula = async (req,res) => {
    try{
        const material = req.files.material
        const file = material[0]

        let nomeDados = ''

            if(file.key){
                nomeDados = file.key
            }else{
                nomeDados = file.filename
            }
            const { name, ext } = path.parse(nomeDados);

        let url_arquivo = ''

        if (process.env.STORAGE_TYPE === 's3'){
            url_arquivo =  `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${name}${ext}`
        }

        const dados = await Arquivos.create({
            nome_arquivos:name,
            url_arquivo:url_arquivo,
            extensao:ext,
            aula_id:req.params.id,
            tipo:'material'
            })
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const getVideo = async (req, res) => {
    try{
        const dados = await Arquivos.findOne({
            where:{
                id:req.params.id
            }
        })
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}