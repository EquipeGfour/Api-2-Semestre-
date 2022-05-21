import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendMail = async (email, senha) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'G-four token de acesso',
        html: `<h2>Sua senha foi recuperada </h2>
        <p>seu login:<p><br> <strong> ${senha} </strong>`,
        // attachments: [{
        //     filename: 'Fatec.jpg', //nome do arquivo  
        //     path: 'C:/Users/ITX Gamer/Desktop/Api-2-Semestre-/imagens_gerais/Fatec.jpg',  //caminho do arquivo
        //     // cid: 'caminho' 
        // }]

    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}