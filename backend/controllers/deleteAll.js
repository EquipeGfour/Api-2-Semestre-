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

