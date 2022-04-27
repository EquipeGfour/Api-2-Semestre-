import { inserirArquivo } from "../service/updateService.js";

export const dadosUpload = async (req,res) => {
    try{
        const dados = req.body
        const { name, ext } = req;
        const id = req.params.id
        const infoUpload = await inserirArquivo(name,ext,id)
        res.json(infoUpload)
    }catch(error){
        res.status(500).json({message:error})
    }
}