import Aula from "../models/aula.js"
import Colaborador from "../models/colaborador.js"

export const criarAula = async (req, res) => {
    try{
        const dados = await Aula.create({
            titulo_aula: req.body.titulo_aula,
            descricao_aula: req.body.descricao_aula,
            tempo_video: req.body.tempo_video,
            carga_horaria_aula: req.body.carga_horaria_aula,
            curso_id: req.params.id
        })
        res.status(201).json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarAula = async (req, res) => {
    try{
        const dados = await Aula.findAll({
            where:{ 
                curso_id:req.params.id 
            },
            attributes:['id','curso_id','titulo_aula','descricao_aula','tempo_video']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarAulaID = async (req, res) => {
    try{
        const dados = await Aula.findOne({
            where:{
                curso_id: req.params.id
            },
            attributes:['id','curso_id','titulo_aula','descricao_aula','tempo_video']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const verifyAulaEnd = async (req, res) => {
    try{
        const dados = await  Aula.findByPk(req.body.aula_id).then( (aula) => {
            if(!aula) return { message:'Aula não encontrada '}
            return Colaborador.findByPk(req.body.colab_id).then( async (colab) => {
                try{
                    const verify = await aula.hasColaborador(colab)
                    if(verify) return { message:'Colaborador não vinculado' }
                    await aula.addColaborador(colab, {through:{status:'Concluido'}})
                    return aula
                }catch(error){
                    return { message:error }
                }
            })
        })
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

