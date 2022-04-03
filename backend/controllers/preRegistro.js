import Colaborador from "../models/colaborador.js";
import { transporter } from "../config/email.js";
import pessoafisica from "../models/pessoafisica.js";
import PessoaJuridica from "../models/pessoa_juridica.js";

export const insertPreRegistroCpf = async(req, res) => {
    try{
        const senha = geradorSenha()
        // const email = req.body.email
        const dados = await pessoafisica.create({
            cpf:req.body.cpf,
            colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                senha:senha,
            }
        },{
            include: [{
            association: pessoafisica.Colaborador}]
        }
        );

    //     const mailOptions = {
    //         from: 'gfourtestes@gmail.com', 
    //         to: `${email} `, 
    //         subject: 'G-four token de acesso', 
    //         html:`<h2>Sua senha foi gerada </h2>
    //         <p>seu token para login:<p><br> <strong> ${senha} </strong>`,
    //         attachments: [{
    //             filename: 'Fatec.jpg', //nome do arquivo  
    //             path: 'C:/Users/ITX Gamer/Desktop/Api-2-Semestre-/imagens_gerais/Fatec.jpg',  //caminho do arquivo
    //             // cid: 'caminho' 
    //         }]
            
    // };
    
    // transporter.sendMail(mailOptions, (err, info) => {
    //     if(err)
    //       console.log(err)
    //     else
    //       console.log(info);
    //  });
        return res.json(dados) 
        
    }catch (error) {
        res.json({ message: error.message });
    }
}






export const insertPreRegistroCnpj = async(req, res) => {
    try{
        const senha = geradorSenha()
        // const email = req.body.email
        const dados = await PessoaJuridica.create({
            cnpj:req.body.cnpj,
            colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                senha:senha,
            }
        },{
            include: [{
            association: PessoaJuridica.Colaborador}]
        }
        );

        return res.json(dados)

    }catch (error) {
        res.json({ message: error.message });
    }
}





function geradorSenha (){
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    return token(12).toUpperCase()
}






