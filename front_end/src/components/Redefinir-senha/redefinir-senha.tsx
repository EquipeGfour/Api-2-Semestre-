import React, { Component } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./redefinir.css"
import axios from "../../functions/axios";
import { useCookies } from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'


const Redefinir: React.FC = () => {

  React.useEffect(() => {
    document.title = 'Redefinir'
  })
  return (

    <div className="loginContainer">
      <h1>Redefinir Senha</h1>
      <div className="centralizar">
      <div className="row senha">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Nova Senha</label>
          </div>
        </div>

        <div className="row senha">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Confirmar Senha</label>
          </div>
        </div>



        <a className="waves-effect waves-light btn-large btnAzulLogin" /*onClick={GetLogin}*/>Confirmar</a>


      </div>
    </div>



  )

}


export default Redefinir