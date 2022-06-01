import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendForm = async (email) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'G-four token de acesso',
        html: `<h2> </h2>
        <p>seu login:<p><br> <strong> 
        <a>link </a> </strong>`,
        

    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}