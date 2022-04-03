import Colaborador from "../models/colaborador.js"


export const verify = async (req, res) => {
    try{
        const dados = await Colaborador.findOne({ where: { email: req.body.email, senha:req.body.senha} })
        // res.json(dados)
        if(dados === null ){
            res.status(401).json({"message":"Email ou Senha incorretos"})
        }
        else{
            res.json({"message":"Login Realizado com Sucesso",dados}) 
        } 
    } catch (error) {
        res.json({ message: error.message });
    } 
}