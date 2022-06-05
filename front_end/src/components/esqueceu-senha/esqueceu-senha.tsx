import React, { useState } from "react";
import {Link,Navigate,useNavigate, useParams} from 'react-router-dom';
import "./esqueceu.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'

const Esqueceu: React.FC = () => {
const [email,setEmail] = React.useState('')
console.log(email);

  const RecuperarSenha = (email)=>{
    let url = "/api/colab/recuperar";
    let obj = {
      email:email, 
    }
    axios.post(url,obj).then(res => { 
      M.toast({html:'Senha enviada para seu Email cadastrado !', classes:"modal1 rounded"}) 
      setEmail('')
    }).catch(erro => {
      console.error('Erro', erro.response)    
    })
  } 

  React.useEffect(() => {
        document.title = 'Esqueceu'       
  })

  return (
      <div className="loginContainer">
      <h1>Recuperar Senha</h1>

      <p className="texto">Verifique sua identidade digitando o seu E-mail e lá você receberá um código de confirmação.</p>
      <div className="centralizar">
      <div className="row senha">
          <div className="input-field col s12">
            <input value = {email} id="email" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) } />
            <label htmlFor="password">E-mail</label>
          </div>
        </div>     
        <Link to={'/'}>
          <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={(e)=>RecuperarSenha(email)}>Enviar</a>
        </Link>
      </div>
    </div>
  )
}
export default Esqueceu