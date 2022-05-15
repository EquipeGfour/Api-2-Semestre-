import aws from 'aws-sdk';
import { dadosArquivoBaixar, inserirArquivo, pegarArquivoById, pegarDadosArquivo } from "../service/uploadService.js";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";
import fs from "fs"



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(path.basename(__filename))
const caminhoArquivo = path.join(__dirname + '/uploads');

export const dadosUpload = async (req,res) => {
    
    try{
        const documentos = req.files.documento??[]        
        const certificados = req.files.certificado??[]
        const comprovantes = req.files.comprovante??[]
        const dados = [...documentos, ...certificados, ...comprovantes]
        
        const salvos =  await Promise.all(dados.map(async file=>{

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
        res.json(dados)
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