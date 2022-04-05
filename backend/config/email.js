import NodeMailer  from "nodemailer"

export const transporter = NodeMailer.createTransport({ 
    service: 'gmail', 
    auth: { 
       user: process.env.EMAIL, 
       pass: process.env.EMAIL_SENHA //colocar senha do email 
     } 
    });
