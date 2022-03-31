import Colaborador from "../models/colaborador.js";

export const getAllColaborador = async (req, res) => {
    try {
        const colaborador = await Colaborador.findAll();
        res.json(colaborador);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


