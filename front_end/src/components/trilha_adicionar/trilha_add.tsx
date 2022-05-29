import React, { useState } from "react"
import "./style.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'


const TrilhaAdd: React.FC = (props) => {




    React.useEffect(() => {
        document.title = 'Trilha-adicionar'

        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);

        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);

    }, [])

    return (
        <div className="containerPrincipal">

            <div className="dadosContainer titulo">
                <span>Trilha de Aprendizado</span>
            </div>


            <div className="row">
                <div className="input-field col s12">

                    <input placeholder="Nome do Curso" id="first_name2" type="text" className="validate" />
                    <label className="active" htmlFor="last_name">Nome do Curso</label>

                </div>


            <form>
                <div className="row">
                    <div className="input-field col s12 texto">
                        <textarea id="textarea1" placeholder="Descrição Curso" className="materialize-textarea"></textarea>
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










    )


}

export default TrilhaAdd