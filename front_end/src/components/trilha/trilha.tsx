import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './trilha01.css';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from "../img/trilhabranco.png";
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";

const Trilha: React.FC = (props) => {
const [nometrilha,setNomeTrilha] = React.useState([])
const [descricaotrilha,setDescricaoTrilha] = React.useState('')

const buscaTrilha = () =>{
  axios.get(`/api/trilha/getTrilha`,{headers:CriaHeader()}).then(res=>{ 
    console.log(res.data)     
    setNomeTrilha(res.data)
    setDescricaoTrilha(res.data)
  }).catch(erro=>{
    console.error(erro)
  })
}



  React.useEffect(() => {
    document.title = 'Trilha'
    buscaTrilha()
  },[])

  return (
  <div className="tela-trilha">
      <h3 className="titulo-trilha">Trilha de Aprendizado</h3>
      <div className="row">
        <div className="botaoVoador">
          <Link to={'/criar-trilha'}>
            <a className="waves-effect waves-light btn-small"><i className="material-icons left text-white">school</i>Criar Trilha</a>
          </Link>
          
        </div>
          <div className="col s12 conteiner-cinza3">
            <div className="bg-cinza highlight div-cursos">
              {nometrilha.map((n,index)=>
                <div key={n.id} className="card-cinza">
                  <Link to={'/menu-curso'}>
                    <div>                  
                      <h5 className="curso1">{n.nome_trilha}</h5>
                      <p>{n.descricao_trilha}</p>
                    </div>
                    <div className="">                      
                      <Link to={`/trilha-adicionar/${n.id}`}>
                        <i className="material-icons pointer posicao" title="Adicionar Curso à Trilha">add</i>
                      </Link>                  
                    </div>
                  </Link>
                </div>
              )}                       
            </div>
          </div>
      </div>
  </div>
  )

}
export default Trilha



