import PessoaJuridica from "../models/pessoa_juridica.js";

export const selectAllPj = async (req, res) => {
    try{

        const dados = await PessoaJuridica.findAll()
        console.log(dados)
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}