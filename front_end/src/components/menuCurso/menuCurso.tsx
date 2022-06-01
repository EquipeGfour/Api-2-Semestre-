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
                <span className="titulo">Java </span>
            </div>
            <ul className="collapsible expandable headerCurso">        
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title='Ver Colaboradores'><i className="material-icons">info_outline</i>Informações Curso</div>
                    <div className="collapsible-body tabelaCargo">
                    <div className="row informacoescurso">
                        <div className="input-field col s12">
                            <input placeholder="Nome do Curso" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="last_name">Nome do Curso</label>
                        </div>
                        <form>
                            <div className="row">
                                <div className="input-field col s12 texto">
                                    <textarea   id="textarea1" placeholder="Descrição Curso" className="materialize-textarea text-white" ></textarea>
                                    <label className="labelstatus1" htmlFor="textarea1">Descrição do Curso</label>
                                </div>
                            </div>
                        </form>
                        <div className="col s12">
                            <div className="input-field col s12 input-select seletorstatus">
                                <select className='select'>
                                    <option value="1">Status</option>
                                    <option value="2">Basico</option>
                                    <option value="3">Intermediário</option>
                                    <option value="4">Avançado</option>
                                </select>
                                <label className="labelstatus">Nível do Curso</label>
                            </div>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Carga Horária do Curso" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="last_name">Carga Horária do Curso</label>
                        </div>
                    </div>
                </div>
            </li>
        </ul>


            <ul className="collapsible expandable headerCurso">        
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title='Ver Colaboradores'><i className="material-icons">school</i>Material de Apoio</div>
                    <div className="collapsible-body tabelaCargo">
                        <table className="highlight responsive-table centered">
                            <thead className="campos">
                                <tr>             
                                    <th className="espacamento">Arquivos</th>
                                    <th className="espacamento">Tipo</th>  
                                    <th className="espacamento">Baixar</th>              
                                </tr>
                            </thead>
                            <tbody>                    
                                <tr>
                                    <td>Aula_01 - Introdução aos Conceitos Básico de Java</td>
                                    <td>.pdf</td>
                                    <td><i className="material-icons pointer" title="Baixar">download</i></td>                        
                                </tr>                                                    
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <ul className="collapsible expandable headerCurso">        
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title='Ver Colaboradores'><i className="material-icons">computer</i>Video-Aulas</div>
                    <div className="collapsible-body tabelaCargo">
                        <table className="highlight responsive-table centered">
                            <thead className="campos">
                                <tr>             
                                    <th className="espacamento">Video</th>
                                    <th className="espacamento">Tipo</th>  
                                    <th className="espacamento">Assistir</th>              
                                </tr>
                            </thead>
                            <tbody>                    
                                <tr>
                                    <td>Video_01 - Introdução ao Java</td>
                                    <td>.mp4</td>                               
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