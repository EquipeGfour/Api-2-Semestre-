import React, { Component, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./redefinir.css"
import axios from "../../functions/axios";
import { useCookies } from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import { CriaHeader } from '../../functions';

const Redefinir: React.FC = () => {
  const [cookie,setCookie] = useCookies(['ionic-user', 'ionic-JWT'])
  const [senha,setSenha] = useState('')
  const [confirmasenha,setConfirmasenha] = useState('')
  const navigate = useNavigate()

  const redefinirSenha = () =>{
    const logado = cookie['ionic-user']
    if(senha !== confirmasenha){
      M.toast({ html: 'Campo Senha e Confirma Senha estão divergentes!', classes: "modalerro rounded" })
      return
    }
    axios.post(`/api/colab/redefinirSenha/${logado.id}`,{senha},{ headers: CriaHeader() }).then(res => {
      M.toast({ html: 'Senha Alterada com Sucesso!', classes: "modal1 rounded" })
      navigate('/')
    }).catch(erro => {
      console.error('Erro', erro.response)
    })
  }

  React.useEffect(() => {
    document.title = 'Redefinir'
  })

  return (
    <div className="loginContainer">
      <h1>Redefinir Senha</h1>
      <div className="centralizar">
        <div className="row senha">
            <div className="input-field col s12">
              <input id="password" value={senha} type="password" className="validate" onChange={(e)=>setSenha(e.target.value)}/>
              <label htmlFor="password">Nova Senha</label>
            </div>
        </div>

        <div className="row senha">
          <div className="input-field col s12">
            <input id="password" value={confirmasenha} type="password" className="validate" onChange={(e) => setConfirmasenha(e.target.value)} />
            <label htmlFor="password">Confirmar Senha</label>
          </div>
        </div>
          <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={redefinirSenha}>Confirmar</a>
      </div>
    </div>
  )
}
export default Redefinir