import React, { Component } from "react";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import M from 'materialize-css/dist/js/materialize'
import './trilha_Colaborador.css';
import 'react-circular-progressbar/dist/styles.css';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from "../img/trilhabranco.png";
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";

const Trilha_Colaborador: React.FC = () => {
  const params = useParams()
  const [checked, setChecked] = React.useState(false)
  const [trilhas, setTrilhas] = React.useState([])

  const getTrilhas = () => {
    const id = params.id
    axios.get(`/api/trilha/trilhaColaborador/${id}`, {headers: CriaHeader()}).then(res => {
      setTrilhas(res.data.trilha_aprendizados)
    }).catch(err => {
      M.toast({html:`Falha ao buscar dados`, classes:"modalerro rounded"})
    })
  }

  React.useEffect(() => {
    document.title = 'trilha_Colaborador'
    getTrilhas()
  }, [])

  return (
    <div className="tela-trilha">
    <h3 className="titulo-trilha">Trilha de Aprendizado</h3>
    <div className="row">
    {trilhas.map((t,index)=>( 
      <div key={t.id} className="col s12 conteiner-cinza1">
        <div className="bg-cinza div-cursos">
          <div className=" card-cinza">
            <Link to={`/geral-cursos-colab/${t.id}`}>
            <div>
              <h5 className="curso1">{t.nome_trilha} </h5>
              <p>Descrição Trilha: {t.descricao_trilha}</p>
            </div>
            
              
            
            </Link>
          </div>                     
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}
export default Trilha_Colaborador



