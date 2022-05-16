import React, { Component } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './trilha_Colaborador.css';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from "../img/trilhabranco.png";
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Trilha_Colaborador: React.FC = () => {
  const [checked, setChecked] = React.useState(false)

  React.useEffect(() => {
    document.title = 'trilha_Colaborador'
  })


  return (
    <div className="tela-trilha">
      <h3 className="titulo-trilha">Trilha de Aprendizado</h3>
      <div className="row">
        <div className="col s3 conteiner-cinza2">
          <div className="card bg-cinza-bar">
            <img className="imgColabt" src={colabbranco} alt="" />
            <h5 className="usuario-trilha">Nome do Usuário</h5>
            <h4 className="cargo-trilha">Função</h4>
          </div>
          <div className="card bg-cinza-bar">

            <div style={{/*width: 260, height: 200,*/  padding: "40px 40px 40px 40px" }} >
              <CircularProgressbar text="85%" value={66} />
              <h5 className="usuario-trilha">Progresso</h5>
            </div>


          </div>
        </div>
        <div className="col s9 conteiner-cinza1">
          <div className="bg-cinza div-cursos">
            <div className="card card-cinza card horizontal">
              <div className="card-image">
                <img className="imgtrilha" src={trilhabranco} alt="" />
                
              </div>
              <div>
                <h5 className="curso"> Java </h5>
              </div>
              <div className="descricao-curso">
                <p>Curso básico de Java.</p>
              </div>
            </div>

            <div className="card card-cinza card horizontal">
              <div className="card-image">
                <img className="imgtrilha" src={trilhabranco} alt="" />
                
              </div>
              <div>
                <h5 className="curso"> Java </h5>
              </div>
              <div className="descricao-curso">
                <p>Curso básico de Java.</p>
              </div>
            </div>
            <div className="card card-cinza card horizontal">
              <div className="card-image">
                <img className="imgtrilha" src={trilhabranco} alt="" />
              </div>
              <div>
                <h5 className="curso"> Java </h5>
              </div>
              <div className="descricao-curso">
                <p>Curso básico de Java.</p>
              </div>
            </div>
            <Link to={"../../components/Upload"} className="waves-effect waves-light btn-large btnAzulLogin">Upload</Link>
          </div>
          
        </div>
      </div>
    </div>
  )

}
export default Trilha_Colaborador



