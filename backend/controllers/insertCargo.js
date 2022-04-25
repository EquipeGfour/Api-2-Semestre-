import Cargos from "../models/cargo.js";

export const inserirCargo = async (req,res) =>{
    try{
        const areaCargo = await Cargos.create({
            cargo:req.body.cargo,
            Departamento_ID:req.params.id
        });
        return res.json(areaCargo);    
    }catch(error){
       res.status(400).json({message: error.message});

    }
}

