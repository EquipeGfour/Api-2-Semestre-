import Colaborador from "../models/colaborador.js";
import NodeMailer  from "nodemailer"


const transporter = NodeMailer.createTransport({ 
    service: 'gmail', 
    auth: { 
       user: 'gfourtestes@gmail.com ', 
       pass: 'testes321' 
     } 
    });

export const insertPreRegistro = async(req, res) => {
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const dados = await Colaborador.create({
            email:req.body.email ,
            senha:senha
        });


        const mailOptions = {
            from: 'gfourtestes@gmail.com', // sender address
            to: `${email} `, // receiver (use array of string for a list)
            subject: 'Subject of your email', // Subject line
            html:`<p>seu token para login<p> <strong> ${senha} </strong>`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    

        return res.json('Registro Inserido')
        
    }catch (error) {
        res.json({ message: error.message });
    }
}

function geradorSenha (){
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    return token(12)
}






