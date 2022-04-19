import Departamento from "../models/departamentos.js"

export const inserirDepartamanto =  async (req, res) => {

    try{

        const areaDepartamento = await Departamento.create( { area:req.body.area } )
        return res.json(areaDepartamento)

    }catch(error){
        res.json({ message: error.message})
    }

}