import Cargo from "../models/cargo.js";

export const inserirCargo = async (req,res) =>{
    try{
        if(req.body.nivel === '')return res.status(400).json({ message: 'Nivel não pode ser vazio' })
        const areaCargo = await Cargo.create({
            cargo:req.body.cargo,
            nivel:req.body.nivel,
            departamento_id:req.params.id
        });
        return res.json(areaCargo);    
    }catch(error){
        res.status(400).json({message: error.message});
    }
}