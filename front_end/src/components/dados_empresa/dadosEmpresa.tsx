import React from 'react'
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


const DadosEmpresa:React.FC=(props)=>{
    const navigate = useNavigate()
    const [cookie,setCookie]=useCookies(['ionic-user'])
    
    const [nomecompleto,setNomecompleto] = React.useState('')
    const [empresa_contratada,setEmpresacontratada] = React.useState('')
    const [cnpj,setCnpj] = React.useState('')
    const [data_fundacao,setDatafundacao] = React.useState('')
    const [tempo_formalizacao,setTempoformalizacao] = React.useState('')
    const [natureza_juridica,setNaturezajuridica] = React.useState('')
    
    React.useEffect(()=>{
        
        const logado = cookie['ionic-user']
        setNomecompleto(logado.nome)
        setCnpj(logado.cnpj)
        
    },[])

    const sendData = ()=>{        
        const logado = cookie['ionic-user']       
        const dados={
            id:logado.ID,
            nome:nomecompleto,
            empresa_contratada,
            cnpj,        
            data_fundacao,
            tempo_formalizacao,
            natureza_juridica
        }

    if(!ValidaCampo()){

        axios.post('http://localhost:5000/colab/cnpj',dados).then(res=>{
            M.toast({html:'Cadastro Realizado com Sucesso !', classes:"modal1 rounded"})
            navigate('/')

        }).catch(erro=>{
            console.error('Erro', erro.response)
        })
    }       
    }

    const ValidaCampo = ()=>{
        let faltaDados = false
        if(data_fundacao === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Data de Fundação !', classes:"modalerro rounded"})
        }

        if(tempo_formalizacao === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Tempo Formalização !', classes:"modalerro rounded"})
        }

        if(natureza_juridica === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Natureza Jurídica !', classes:"modalerro rounded"})
        }

       
        return faltaDados

    }

    return(
    <div className="dadosContainer row dados_pessoais">
            <h1>Dados Empresa</h1>
        <form>
            <div className="col s12 esquerda">
                <div className="row">
                    <div className="input-field col s6">
                        <input value={nomecompleto} placeholder="Nome Funcionário" id="first_name2" 
                        type="text" className="validate" onChange={ (e) => setNomecompleto(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Nome Funcionário</label>
                    </div>
                    <div className="input-field col s6">
                        <input value = {cnpj} placeholder="CNPJ" id="first_name2" 
                        type="text" className="validate"onChange={ (e) => setCnpj(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">CNPJ</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={data_fundacao}  placeholder="Data Fundação" id="first_name2" type="text" className="validate" onChange={ (e) => setDatafundacao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Data Fundação</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={tempo_formalizacao} placeholder="Tempo Formalização" id="first_name2" type="text" className="validate" onChange={ (e) => setTempoformalizacao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Tempo Formalização</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={natureza_juridica}  placeholder="Natureza Jurídica" id="first_name2" type="text" className="validate" onChange={ (e) => setNaturezajuridica(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Natureza Jurídica</label>
                    </div>

                    <div className="input-field col s6">
                        <input value={empresa_contratada}  placeholder="Empresa Contratada" id="first_name2" type="text" className="validate" onChange={ (e) => setEmpresacontratada(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Empresa Contratada</label>
                    </div>

                </div>
            </div>
            <a className="waves-effect waves-light btn-large btnAzul" onClick={sendData}>Enviar</a>            
        </form>

    </div>          
    )
}
export default DadosEmpresa