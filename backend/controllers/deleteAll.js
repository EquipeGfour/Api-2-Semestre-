import Colaborador from "../models/colaborador.js";
import Cargo from "../models/cargo.js";
import sequelize from "../config/db.js";
import Departamento from "../models/departamentos.js";
import Cargos from "../models/cargo.js";


export const deletarAll = async (req, res) => {
    try {
        const Cargo = await Cargos.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json( {message:"Deletado com sucesso"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

