import Colaborador from "../models/colaborador.js";
import pessoafisica from "../models/pessoafisica.js"
import Cargo from "../models/cargo.js";

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
        const pessoafisica = await findAllPessoaFisica()
        res.json(pessoafisica)
    }catch (error) {
        res.json({ message: error.message });
    }
}


export const testeCargo = async (req,res) => {
    try{
        const dados = await Colaborador.findAll({
            include:Cargo
        });
        res.json(dados)
    }catch (error) {
        res.json({ message: error.message });
    }
}
