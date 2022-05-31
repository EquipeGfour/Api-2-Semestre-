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
            <h3 className="titulo-assistir">Nome do video</h3>
            <hr className="linhaDivisao"></hr>
            <h3 className="titulo-assistir">Arquivos da aula</h3>
            <div className="arquivosAssistir">
                <table className="responsive-table centered tabUp1">
                    <thead>
                        <tr className="linha">
                            <th>Arquivo</th>
                            <th></th>
                            <th></th>
                            <th>Baixar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nome do arquivo</td>
                            <td><span><button className="excluir">{/*<i className="material-icons delUp">clear</i>*/}</button></span></td>
                            <td></td>
                            <td>
                                <div className="file-field input-field btn">
                                    <i className="material-icons">file_download</i>
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