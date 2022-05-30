import Colaborador from "../models/colaborador.js"
import TrilhaAprendizado from "../models/trilha_aprendizado.js"


export const criarTrilha = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.create({
            nome:req.body.nome,
            status:req.body.status,
            data_inicio:req.body.data_inicio,
            data_fim:req.body.data_fim,
        })
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}

export const getTrilha = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.findAll({
            attributes:['id','nome']
        })
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}


export const getTrilhaID = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.findOne({
            where:{
                id:req.params.id
            }
        })
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}

export const vinculotrilhaColab = async (req, res) => {
    try{
        const dados = await Colaborador.update({
            trilha_id:req.body.trilha_id
        })
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}
