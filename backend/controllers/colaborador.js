import Colaborador from "../models/colaborador.js";
import pessoafisica from "../models/pessoafisica.js"
import Cargo from "../models/cargo.js";
import Endereco from "../models/endereco.js";
import sequelize from "../config/db.js"
import DadosAcademicos from "../models/Dados_Academicos.js"
import { findAllPessoaFisica } from "../service/pessoaFisicaService.js";
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


export const inserirDadosColab  = async (req,res)=>{
    const t = await sequelize.transaction();
    try{
        const dados_pessoais = await Endereco.create({
                    estado:req.body.estado,
                    cep:req.body.cep,
                    regiao:req.body.regiao,
                    cidade:req.body.cidade,
                    bairro:req.body.bairro,
                    complemento:req.body.complemento,
                        Colaborador:{
                        nacionalidade:req.body.nacionalidade,
                        naturalidade:req.body.naturalidade,
                        estado_civil:req.body.estado_civil,
                        genero:req.body.genero,
                        raca:req.body.raca,
                        ddd:req.body.ddd,
                        numero:req.body.numero,
                        data_nascimento:req.body.data_nascimento,
                        DadosAcademicos:{
                            formacao:req.body.formacao,
                            cursos:req.body.cursos,
                            linguas:req.body.linguas
                            }
                    }
            
        },{ 
            include:[
            {model:Colaborador,include:{model:DadosAcademicos,as:"DadosAcademicos"}}
        ] 
        })

        res.json({
            dados_pessoais
        })
    }catch(error){
        res.json({ message: error.message });
    }
}
