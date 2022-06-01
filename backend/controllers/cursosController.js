import Cursos from '../models/cursos.js'
import TrilhaAprendizado from '../models/trilha_aprendizado.js'

export const criarCursos = async (req, res) => {
    try{
        const dados = await Cursos.create({
            trilha_id: req.params.id,
            nome_curso:req.body.nome_curso,
            descricao:req.body.descricao,
            nivel_curso:req.body.nivel_curso,
            carga_horaria_curso:req.body.carga_horaria_curso
        },
        {
            include: TrilhaAprendizado
        })

        res.status(201).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const listarCursos = async (req, res) => {
    try{
        const dados = await Cursos.findAll({
            where:{
                trilha_id:req.params.id
            },
            attributes:['id','trilha_id','nome_curso','descricao','nivel_curso','carga_horaria_curso']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarcursoID = async (req, res) => {
    try{
        const dados = await Cursos.findOne({
            where:{
                id: req.params.id
            },
            attributes:['id','trilha_id','nome_curso','descricao','nivel_curso','carga_horaria_curso']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}