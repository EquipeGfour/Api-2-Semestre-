import Colaborador from "../models/colaborador.js";

export const insertPreRegistro = async(req, res) => {
    try{
        const dados = await Colaborador.create({
            email:req.body.email ,
            senha:req.body.senha
        })
        return res.json('Registro Inserido')
        
    }catch (error) {
        res.json({ message: error.message });
    }
}