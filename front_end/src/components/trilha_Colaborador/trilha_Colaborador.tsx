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
export default Trilha_Colaborador



