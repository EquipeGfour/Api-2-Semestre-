import Cursos from '../models/cursos.js'
import TrilhaAprendizado from '../models/trilha_aprendizado.js'

export const criarCursos = async (req, res) => {
    try{
        const teste = req.body
        console.log(teste)
        const dados = await Cursos.create({
            id:req.params.id,
            nome_curso:req.body.nome_curso,
            descricao:req.body.descricao,
            nivel:req.body.nivel,
            carga_horaria:req.body.carga_horaria
            
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
                trilha_id:req.body.trilha_id
            }
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
            }
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}