import Cargo from "../models/cargo.js";
import Departamento from "../models/departamentos.js";

export const getCargosDepartamentos = async (req,res) => {
    try{
        const dados = await Cargo.findAll({
            include:Departamento,
            where:{Departamento_ID:req.params.id}
        })
        console.log("Variavel: ", req.params.id)
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
    
}