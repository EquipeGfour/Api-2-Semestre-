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