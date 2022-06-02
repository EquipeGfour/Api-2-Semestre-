import React, { useState } from "react"
import "./assistirCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";

const AssistirCurso: React.FC = (props) => {

    React.useEffect(() => {
        document.title = 'Assistir-Curso'
    }, [])

    return (
        <div className="containerAssistir">
            <h3 className="titulo-assistir">Nome do curso</h3>
            <video id="videoBanner" className="videoBanner" controls  >
                <source src="https://api-ionic-uploads.s3.sa-east-1.amazonaws.com/9419da444ac024cebe41057c61f52096-Aula02-python.mp4" type='video/mp4'></source>
            </video>
            <div className="botaoFinal">
                <Link to={'/trilha'}>
                    <a className="waves-effect waves-light btn-large  btnAzulFimCurso">Finalizado</a>
                </Link>                   
            </div>
        </div>
    )
}
export default AssistirCurso