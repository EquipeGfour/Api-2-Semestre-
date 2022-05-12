import Cargos from "../models/cargo.js"
import Colaborador from "../models/colaborador.js"
import Departamento from "../models/departamentos.js"
import { departDados, createDepart } from "../service/departamentoService.js"


export const inserirDepartamanto =  async (req, res) => {
    try{
        // const headId = req.body.head_id
        // const headNome = req.body.head
        const areaDepartamento = await createDepart(req.body.area)
        return res.json(areaDepartamento)
    }catch(error){
        res.status(400).json({ message: error.message})
    }
}

export const getAllDepartamento = async (req,res) => {
    try{
        const dados = await departDados()
        const filtrado = dados.map(d => {
            let totalColab = 0
            const Cargos = d.cargos.map(c => {
                totalColab += c.colaboradors.length
                return {...c.dataValues, qtdColab:c.colaboradors.length}
            })
            return {...d.dataValues, qtdCargos:d.cargos.length, Cargos, totalColab}
        })
        
        res.json(filtrado)
    }catch(error){
        res.status(500).json({ message: error.message })
    }
}

export const getCargosDepartamentos = async (req,res) => {
    try{
        const dados = await Departamento.findOne({
            include:[{
                model:Cargos,
                    attributes:['id','cargo','departamento_id'],
                include:{
                    model:Colaborador,
                    attributes:['id','nome','email','telefone']
                }
            }],
            attributes:['id','area'],
            where:{id:req.params.id}
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deleteDepart = async (req,res) => {
    try{
        const dados = await Departamento.destroy({
            where: {id:req.params.id}
        })
        res.json({ message:'Delatado'})

    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}