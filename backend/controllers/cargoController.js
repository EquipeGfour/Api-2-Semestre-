import Cargo from "../models/cargo.js";

export const inserirCargo = async (req,res) =>{
    try{
        const areaCargo = await Cargo.create({
            cargo:req.body.cargo,
            departamento_id:req.params.id
        });
        return res.json(areaCargo);    
    }catch(error){
       res.status(400).json({message: error.message});

    }
}