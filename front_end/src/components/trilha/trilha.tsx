import React, { Component } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './trilha01.css';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from "../img/trilhabranco.png";
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Trilha: React.FC = () => {


  React.useEffect(() => {
    document.title = 'Trilha'
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
                <h6 className="curso"> curso 1 </h6>
              </div>
              <div className="descricao-curso">
                <p>Curso preparatório de Pastelaria.</p>
              </div>
            </div>
            <div className="card card-cinza card horizontal">
              <div className="card-image">
                <img className="imgtrilha" src={trilhabranco} alt="" />
              </div>
              <h6 className="curso"> curso 2 </h6>
              <div className="descricao-curso">
                <p>Curso avançado de Pastelaria.</p>
              </div>
            </div>
            <div className="card card-cinza card horizontal">
              <div className="card-image">
                <img className="imgtrilha" src={trilhabranco} alt="" />
              </div>
              <h6 className="curso"> curso 3 </h6>
              <div className="descricao-curso">
                <p>Curso Master de Pastelaria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Trilha



