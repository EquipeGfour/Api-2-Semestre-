import React, {Component} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./relatorioDesligamento.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import { log } from 'console';


const RelatorioDesligamento : React.FC=(props)=> {


    React.useEffect(()=>{
        document.title='Relatório Desligamento'
        
    },[])

    return(
        <div className="ContainerRelatorio">
            <h1>Relatório do Desligamento</h1>
                <div className="centralizar">
                    <div className="row">
                        <div className="input-field col s12 texto">
                            <textarea   id="textarea1"  className="materialize-textarea text-white" ></textarea>
                            <label className="labelstatus1" htmlFor="textarea1">Motivo do Desligamento</label>
                        </div>
                    </div>

                    <a className="waves-effect waves-light btn-large btnAzulRelatorio" >Salvar</a> 
                </div>
        </div>
    )
}

export default RelatorioDesligamento
