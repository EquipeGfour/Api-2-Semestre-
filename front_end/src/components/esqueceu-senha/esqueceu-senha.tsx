import React from "react";
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./esqueceu.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'


const Esqueceu: React.FC = () => {
  
    React.useEffect(() => {
        document.title = 'Esqueceu'
      })

      return (
            <div className="loginContainer">
      <h1>Recuperar Senha</h1>
      <p className="texto">Verifique sua identidade digitando o seu E-mail ou telefone e lá você receberá um código de confirmação.</p>
      <div className="centralizar">
      <div className="row senha">
          <div className="input-field col s12">
            <input id="email" type="text" className="validate" />
            <label htmlFor="password">E-mail ou Telefone</label>
          </div>
        </div>

       



        <a className="waves-effect waves-light btn-large btnAzulLogin" /*onClick={GetLogin}*/>Enviar</a>


      </div>
    </div>

      )
}

export default Esqueceu