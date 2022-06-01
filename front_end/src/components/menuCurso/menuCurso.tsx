import React, { useState } from "react"
import "./menuCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";

const MenuCurso: React.FC = (props) => {

    React.useEffect(() => {            
        document.title = 'Menu-Curso'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
    }, [])

    return(
        <div>
            <div className="geralContainer2 ">
                <span className="titulo">Aulas</span>
            </div>        

            <ul className="collapsible expandable headerCurso">        
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title='Ver Colaboradores'><i className="material-icons">computer</i>Aula 1 - Sequelize Sequelize</div>
                    <div className="collapsible-body tabelaCargo">
                        <table className="highlight responsive-table centered">
                            <thead className="campos">
                                <tr>             
                                    <th className="espacamento">Arquivos</th>
                                    <th className="espacamento">Tipo</th>  
                                    <th className="espacamento">Assistir</th>              
                                </tr>
                            </thead>
                            <tbody>                    
                                <tr>
                                    <td>Video_01 - Introdução ao Java</td>
                                    <td>Video</td>                               
                                    <td>
                                        <Link to={'/assistir-curso'}>
                                        <i className="material-icons" title="Assistir">play_arrow</i>
                                        </Link>
                                    </td>                                                           
                                </tr>                                                    
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default MenuCurso