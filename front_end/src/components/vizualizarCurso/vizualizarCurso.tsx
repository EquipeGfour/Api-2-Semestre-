import React, { useState } from "react"
import "./vizualizarCurso.css";
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

const VizualizarCurso: React.FC = (props) => {

    React.useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, Option);
    }, [])


    return (
        <div className="containerVizualizar">
            <div className="dadosContainer cursos">
                <span>Vincular Cursos e Colaboradores</span>
            </div>


            <div className="col s12 row">
                <div className="input-field col s12 input-select seletorstatusVizualizar">
                    <select className='select'>
                        <option value="" disabled selected>Cursos</option>
                        <option value="1">Javascript</option>
                        <option value="2">Python</option>
                        <option value="3">Virar o titan colossal</option>
                    </select>
                    <label className="labelname">Vincular cursos</label>
                </div>
            </div>


            <div className="col s12 row">
                <div className="input-field col s12 input-select seletorstatusVizualizar">
                    <select multiple className='select'>
                        <option value="1">Gerson</option>
                        <option value="2">Rafa</option>
                        <option value="3">Junior</option>
                        <option value="4">bertholdt</option>
                    </select>
                    <label className="labelname">Vincular Colaboradores</label>
                </div>
            </div>
            <div className="botaoSalvar">
                <a className="waves-effect waves-light btn-large btnAzulnovo">Salvar</a>
            </div>

        </div>
    )
}
export default VizualizarCurso




