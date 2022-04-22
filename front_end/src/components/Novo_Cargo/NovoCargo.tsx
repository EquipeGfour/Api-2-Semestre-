import React from "react"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import axios from "axios"
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const NovoCargo: React.FC=()=>{

    React.useEffect(()=>{
        document.title='Novo-Cargo'
    },[])

    return(

    <div className="acessoContainer">
            <h1>Novo Cargo</h1>
            <div className="centralizar">
            <div className="row">
                <div className="input-field col s12">
                <input  placeholder="Nome" id="first_name2" type="text" className="validate" />
                <label className="active" htmlFor="first_name2">Cargo</label>
                </div>
            </div>

            
            


            <a className="waves-effect waves-light btn-large btnAzul" >Salvar</a>

        
        </div> 
    </div>
    )
        
    

}

export default NovoCargo