import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendMail = async (email) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'G-four Questionario Trilha de Aprendizado',
        html: `<h2> </h2>
        <p>Questionario:<p><br> <strong> 
        ${process.env.EMAIL_TERMINO_TRILHA}  </strong>`,
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}