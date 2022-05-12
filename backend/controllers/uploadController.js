import { dadosArquivoBaixar, inserirArquivo, pegarArquivoById, pegarDadosArquivo } from "../service/uploadService.js";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";
import aws from 'aws-sdk';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(path.basename(__filename))
const caminhoArquivo = path.join(__dirname + '/uploads');

export const dadosUpload = async (req,res) => {
    try{
        const dados = req.body
        const { name, ext } = req;
        const id = req.params.id
        const infoUpload = await inserirArquivo(name,ext,id)
        res.json(infoUpload)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

//funcional porem não adicionado amigo.
export const baixar = async (req,res) => {
    try{
        const idArquivo = req.params.id
        const dados = await pegarArquivoById(idArquivo)
        res.download(caminhoArquivo + `/${dados.nome_arquivos}${dados.extensao}`)
    }catch(error){
        res.status(500).json({ message:error.message })
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

        const arquivo = `${dados.nome_arquivos}${dados.extensao}`

        const s3 = new aws.S3();
        const options = {
            Bucket: process.env.BUCKET_NAME,
            Key: arquivo,
        };

        res.attachment(arquivo);

        var fileStream = s3.getObject(options).createReadStream();

        fileStream.pipe(res);

    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}