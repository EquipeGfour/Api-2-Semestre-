import NodeMailer from "nodemailer"
import "dotenv/config"
console.log(process.env.EMAIL, process.env.EMAIL_SENHA)
export const transporter = NodeMailer.createTransport({
  host: 'smtp.mail.ee',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS //colocar senha do email 
  },
  tls: {
    rejectUnauthorized: false
  }
});