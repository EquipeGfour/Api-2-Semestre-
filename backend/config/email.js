import NodeMailer  from "nodemailer"

export const transporter = NodeMailer.createTransport({ 
    service: 'gmail', 
    auth: { 
       user: 'gfourtestes@gmail.com', 
       pass: 'senha321' //colocar senha do email 
     } 
    });
