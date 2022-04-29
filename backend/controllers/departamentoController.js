import { departDados, createDepart } from "../service/departamentoService.js"


export const inserirDepartamanto =  async (req, res) => {
    try{
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
            const Cargos = d.Cargos.map(c => {
                totalColab += c.Colaboradors.length
                return {...c.dataValues, qtdColab:c.Colaboradors.length}
            })
            return {...d.dataValues, qtdCargos:d.Cargos.length, Cargos, totalColab}
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
                model:Cargo,
                    attributes:['id','cargo','Departamento_ID'],
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