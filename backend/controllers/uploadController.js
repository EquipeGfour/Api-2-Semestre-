import { inserirArquivo, pegarArquivoById, pegarDadosArquivo } from "../service/uploadService.js";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";

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