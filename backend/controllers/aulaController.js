import Aula from "../models/aula.js"

export const criarAula = async (req, res) => {
    try{
        const dados = await Aula.create({
            titulo_video: req.body.titulo_video,
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
            attributes:['id','curso_id','titulo_aula','descricao_aula','tempo_aula','nome_aula_arq','extensao_aula','url_arq_aula','tipo_arq_aula']
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
            attributes:['id','curso_id','titulo_aula','descricao_aula','tempo_aula','nome_aula_arq','extensao_aula','url_arq_aula','tipo_arq_aula']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}