import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendPesquisa = async (email) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'G-four token de acesso',
        html: `<h2> </h2>
        <p>Questionario:<p><br> <strong> 
        <a src="https://docs.google.com/forms/d/e/1FAIpQLScCnvYX-SxI0J_BIVfB54unVhI64LJIYiWSMrKJCpvhmkjK2A/viewform">link </a> </strong>`,
        

    };
    transporter.sendPesquisa(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}