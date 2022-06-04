import Colaborador from "../models/colaborador.js"
import TrilhaAprendizado from "../models/trilha_aprendizado.js"
import Sequelize from "../config/db.js"

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
        const ids = req.body.ids;
        let temErro = false;
        const dados = await Promise.all(ids.map(async id => {
            return await TrilhaAprendizado.findByPk(req.body.trilha_id).then( async (trilha) => {
            if(!trilha) return { message:'Trilha não encontrada' }
            return await Colaborador.findByPk(id).then( async (colab) => {
                try{
                    const verify = await trilha.hasColaborador(colab)
                    if(verify) {
                        temErro = true; 
                        return { message:`Colaborador ${colab.nome} já vinculado a trilha` }
                    }
                    await trilha.addColaborador(colab)
                    return {id:colab.id, nome: colab.nome}
                }catch(error){
                    return { message:error }
                }
            })
        })
    }))
    let status = 200
    if (temErro) status = 500
    res.status(status).json(dados)
        
    } catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}


export const getColabByTrilhaId = async (req,res) => {
    try{
        const dados = await Colaborador.findAll({

            attributes:['id','nome', 'email'],
            include:{
                where:{
                    id:req.params.id
                },
                model:TrilhaAprendizado,
                attributes:['id']
            }
        })
        res.status(202).json(dados)

    }catch(error){
        console.log(error);
        res.status(500).json({messge:error})
    }
}


export const getTrilhaColab = async (req,res) => {
    try{
        const dados = await Colaborador.findOne({
            where:{
                id:req.params.id
            },
            attributes:['id','nome'],
            include:{
                model:TrilhaAprendizado,
                attributes:['id','nome_trilha', 'descricao_trilha']
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
        const colab_id = req.body.colab_id;
        let temErro = false;
        const dados = await TrilhaAprendizado.findByPk(req.body.trilha_id).then( async (trilha)=>{
            if(!trilha){
                temErro = true;
                return { message:'Trilha não encontrada' }
            } 
            return await Colaborador.findByPk(colab_id).then( async (colab) =>{
                if(!colab){
                    temErro = true;
                    return { message:'Colaborador não encontrado' }}
                const verify = await trilha.hasColaborador(colab)
                if(!verify) {
                    temErro = true;
                    return { message:`Colaborador ${colab.nome} já removido da trilha` }
                }
                const removido = await trilha.removeColaborador(colab)
                if(removido>0){
                    return { message:`Colaborador ${colab.nome} foi removido da trilha` }
                }
                    return {message: `Removido com sucesso`}
            })
        })
        let status = 200
        if (temErro) status = 500
        res.status(status).json(dados)
    } catch(error){
        res.status(500).json({ message:error })
    }
}

