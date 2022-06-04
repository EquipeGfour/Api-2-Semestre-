import React, { useState } from "react"
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import "./cria_empresa.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const CriaEmpresa: React.FC=()=>{

    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [tempoFormalizacao, setTempoFormalizacao] = useState('')

    const criarEmpresa = () => {
        const obj = {
            empresa_contratada:nomeEmpresa,
            cnpj: cnpj,
            tempo_formalizacao:tempoFormalizacao
        }
        console.log(obj)
        if(!ValidaCampo()){
            axios.post('/api/pj/criarEmpresa',{ empresa_contratada:nomeEmpresa, cnpj: cnpj, tempo_formalizacao:tempoFormalizacao },{headers: CriaHeader()}).then(res=>{
                M.toast({html:'Empresa Cadastrada com sucesso!', classes:"modal1 rounded"})
                setNomeEmpresa('')
                setCnpj('')
                setTempoFormalizacao('')
            })
        }
        
    }

    const ValidaCampo = () => {
        let faltaDados = false
        if (cnpj === '') {
            faltaDados = true
            M.toast({ html: 'Preencha o campo Cnpj !', classes: "modalerro rounded" })
        }
        if (nomeEmpresa === '') {
            faltaDados = true
            M.toast({ html: 'Preencha o campo Nome da Empresa !', classes: "modalerro rounded" })
        }
        if (tempoFormalizacao === '') {
            faltaDados = true
            M.toast({ html: 'Preencha o campo Tempo de Formalização !', classes: "modalerro rounded" })
        }
        return faltaDados
    }

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
                            <input value={ nomeEmpresa } placeholder="Nome da Empresa" id="first_name2" type="text" className="validate" onChange = { e => setNomeEmpresa( e.target.value ) } />
                            <label className="active" htmlFor="first_name2">Nome da Empresa</label>
                        </div>

                        <div className="input-field col s12">
                            <input value={cnpj} placeholder="CNPJ" id="first_name2" type="text" className="validate" onChange = { e => setCnpj( e.target.value ) } />
                            <label className="active" htmlFor="first_name2">CNPJ</label>
                        </div>

                        <div className="input-field col s12">
                            <input value={tempoFormalizacao} placeholder="Tempo de Formalização" id="first_name2" type="text" className="validate" onChange = { e => setTempoFormalizacao( e.target.value ) } />
                            <label className="active" htmlFor="first_name2">Tempo de Formalização</label>
                        </div>
                    </div>
                </div>
                    <a className="waves-effect waves-light btn-large btnAzulCriaEmpresa" onClick = { criarEmpresa }> Salvar </a>
        </div>
    )
}

export default CriaEmpresa