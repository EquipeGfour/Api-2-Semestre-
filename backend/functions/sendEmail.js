import { transporter } from "../config/email.js";



export const sendMail = async (email,senha) =>{
    const mailOptions = {
        from: 'gfourtestes@gmail.com', 
        to: `${email} `, 
        subject: 'G-four token de acesso', 
        html:`<h2>Sua senha foi gerada </h2>
        <p>seu token para login:<p><br> <strong> ${senha} </strong>`,
        // attachments: [{
        //     filename: 'Fatec.jpg', //nome do arquivo  
        //     path: 'C:/Users/ITX Gamer/Desktop/Api-2-Semestre-/imagens_gerais/Fatec.jpg',  //caminho do arquivo
        //     // cid: 'caminho' 
        // }]
        
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}