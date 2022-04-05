import NodeMailer  from "nodemailer"
import "dotenv/config"
console.log(process.env.EMAIL,process.env.EMAIL_SENHA)
export const transporter = NodeMailer.createTransport({ 
    service: 'gmail', 
    auth: { 
       user: process.env.EMAIL, 
       pass: process.env.EMAIL_SENHA //colocar senha do email 
     } 
    });
