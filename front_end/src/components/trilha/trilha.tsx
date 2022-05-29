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

      <a className="waves-effect waves-light btn-small botao"><i className="material-icons left">school</i>Criar Curso</a>

        <div className="col s12 conteiner-cinza1">
          <div className="bg-cinza div-cursos">
            <div className=" card-cinza">
              <Link to={'/menu-curso'}>
              <div>
                <h5 className="curso1"> Java </h5>
              </div>
              <div className="">
                <p>Curso básico de Java.</p>
              </div>
              </Link>
            </div>
                       
          </div>
        </div>
      </div>
    </div>
  )

}
export default Trilha



