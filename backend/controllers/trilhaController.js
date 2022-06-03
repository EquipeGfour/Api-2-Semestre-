import Colaborador from "../models/colaborador.js"
import TrilhaAprendizado from "../models/trilha_aprendizado.js"


export const criarTrilha = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.create({
            nome_trilha:req.body.nome_trilha,
            status:req.body.status,
            data_inicio:req.body.data_inicio,
            data_fim:req.body.data_fim,
            descricao_trilha:req.body.descricao_trilha
        })
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}

export const getTrilha = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.findAll({
            attributes:['id','nome_trilha', 'descricao_trilha']
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

export const vinculoTrilhaColab = async (req, res) => {
    try{
        const dados = await TrilhaAprendizado.findByPk(req.body.trilha_id).then( (trilha) => {
            if(!trilha) return { message:'Trilha não encontrada' }
            return Colaborador.findByPk(req.body.colab_id).then( async (colab) => {
                try{
                    const verify = await trilha.hasColaborador(colab)
                    if(verify) return { message:'Colaborador já vinculado a trilha' }
                    await trilha.addColaborador(colab)
                    return trilha
                }catch(error){
                    return { message:error }
                }
            })
        })
        res.json(dados)
        
    } catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const getTrilhaColab = async (req,res) => {
    try{
        const dados = await Colaborador.findAll({
            where:{
                id:req.params.id
            },
            attributes:['id','nome'],
            include:{
                model:TrilhaAprendizado,
                attributes:['id','nome_trilha']
            }
        })
        res.status(202).json(dados)
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const BuscarTrilhaColab = async (req,res) => {
    try{
        const dados = await Colaborador.findAll({
            where:{
                trilha_id:req.body.trilha_id
            },
            attributes:['id','nome'],
            include:{
                model:TrilhaAprendizado,
                attributes:['id','nome_trilha']
            }
        })
        res.status(202).json(dados)
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const updateTrilhaColab = async (req, res) => {
    try{
        const condicao = {
            where:{ id:req.params.id }
        }
        const valores = {
            trilha_id:null
        }
        const dados = await Colaborador.update(valores,condicao)
        res.json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}

