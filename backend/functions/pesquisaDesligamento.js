import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendMail = async (email) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'Pesquisa de Desligamento',
        html: `<h2> </h2>
        <p>Questionario:<p><br> <strong> 
        ${process.env.EMAIL_PESQUISA_DESLIGAMENTO} 
        </strong>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}