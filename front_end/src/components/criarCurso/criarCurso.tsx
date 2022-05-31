import React, { useState } from "react"
import "./criarCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

const CriarCurso: React.FC = (props) => {

    React.useEffect(() => {
        document.title = 'Cria-Curso'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
    }, [])


    return (
        <div className="containerCriaCurso">
            <div className="dadosContainer cursos">
                <span>Criar Aulas</span>
            </div>

            <div className="tituloArquivos">
                <h5>Adicionar Arquivos</h5>
            </div>

            <div className="arquivo">
            <table className="responsive-table centered tabUp1">
                <thead>
                    <tr className="linha">
                        <th>Tipo</th>
                        <th className="espacoCampo">Arquivo</th>
                        <th></th>               
                    </tr>
                </thead>
                <tbody>
                    <tr>       
                        <td>Material de Apoio</td>
                        <td><span><button className="excluir"></button></span></td>             
                        <td>
                        <div className="file-field input-field btn">
                        <span>Carregar<input type="file"/></span>                        
                        </div>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                <tr>       
                    <td>Vídeos</td>
                    <td><span><button className="excluir"></button></span></td>             
                    <td>
                    <div className="file-field input-field btn">
                    <span>Carregar<input type="file"/></span>                    
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className="listaCurso">
                <table className="responsive-table tabUp2">
                    <thead>
                        <tr>
                            <th>Arquivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arquivo 1</td>
                        </tr>
                        <tr>
                            <td>Arquivo 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="listaCurso">
                <table className="responsive-table tabUp2">
                    <thead>
                        <tr>
                            <th>Vídeos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vídeo 1</td>
                        </tr>
                        <tr>
                            <td>Vídeo 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CriarCurso




