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
        document.title = 'Assitir-Curso'
    }, [])

    return (
        <div className="containerAssistir">
            <h3 className="titulo-assistir">Nome do curso</h3>
            <video id="videoBanner" className="videoBanner" controls  >
                <source src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4' type='video/mp4'></source>
            </video>
            <h3 className="titulo-menuassistir ">Nome do video</h3>
            <hr className="linhaDivisaomenu"></hr>
            <h3 className="titulo-menuassistir ">Arquivos da aula</h3>
            <div className="arquivosAssistir">
                <table className="responsive-table centered tabUp1">
                    <thead>
                        <tr className="linha">
                            <th>Arquivo</th>
                            <th></th>
                            <th></th>
                            <th>Assistir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aula 2 - Conceitos Basicos</td>
                            <td><span><button className="excluir"></button></span></td>
                            <td></td>
                            <td>
                                <div className="file-field input-field ">
                                    <i className="material-icons pointer">play_arrow</i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AssistirCurso