import React, { useState } from "react"
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import "./cria_empresa.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const CriaEmpresa: React.FC=()=>{


    React.useEffect(()=>{
        document.title='Nova Empresa'
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, Option);
    },[])

    return(
        <div className="acessoContainerCriaEmpresa">
            <h1>Nova Empresa</h1>
                <div className="centralizarCriaEmpresa">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value='' placeholder="Nome da Empresa" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="first_name2">Nome da Empresa</label>
                        </div>

                        <div className="input-field col s12">
                            <input value='' placeholder="CNPJ" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="first_name2">CNPJ</label>
                        </div>

                        <div className="input-field col s12">
                            <input value='' placeholder="Representante" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="first_name2">Representante</label>
                        </div>

                        <div className="input-field col s12">
                            <input value='' placeholder="Tempo de Formalização" id="first_name2" type="text" className="validate" />
                            <label className="active" htmlFor="first_name2">Tempo de Formalização</label>
                        </div>
                    </div>
                </div>

                
                    <a className="waves-effect waves-light btn-large btnAzulCriaEmpresa">Salvar</a>
                
        </div>
    )
}

export default CriaEmpresa