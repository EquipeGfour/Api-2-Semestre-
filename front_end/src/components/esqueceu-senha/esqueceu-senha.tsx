import React, { useState } from "react";
import {Link,Navigate,useNavigate, useParams} from 'react-router-dom';
import "./esqueceu.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'


const Esqueceu: React.FC = () => {
const [email,setEmail] = useState('')

const RecuperarSenha = ()=>{
  axios.get(`/api/colab/recuperar/:?`).then(res => {
    console.log(res);    
    setEmail(res.data.email)
    

  }).catch(erro => {
    console.error('Erro', erro.response)
    
})
}
  
    React.useEffect(() => {
        document.title = 'Esqueceu'
        RecuperarSenha()
      })

      return (
            <div className="loginContainer">
      <h1>Recuperar Senha</h1>
      <p className="texto">Verifique sua identidade digitando o seu E-mail e lá você receberá um código de confirmação.</p>
      <div className="centralizar">
      <div className="row senha">
          <div className="input-field col s12">
            <input value = {email} id="email" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) } />
            <label htmlFor="password">E-mail ou Telefone</label>
          </div>
        </div>

       


        <Link to={'/'}>
        <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={()=>RecuperarSenha}>Enviar</a>
        </Link>

      </div>
    </div>

      )
}

export default Esqueceu