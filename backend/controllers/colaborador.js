import Colaborador from "../models/colaborador.js";
import pessoafisica from "../models/pessoafisica.js"

export const getAllColaborador = async (req, res) => {
    try {
        const colaborador = await Colaborador.findAll();
        res.json(colaborador);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const testePessoaFisica = async (req, res) =>{
    try{
        const pessoa = await pessoafisica.findAll({
            include:Colaborador
        });
        res.json(pessoa)
    }catch (error) {
        res.json({ message: error.message });
    }
}


