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
    

    const [empresacontratada,setEmpresacontratada] = React.useState('')
    const [cnpj,setCnpj] = React.useState('')
    const [datafundacao,setDatafundacao] = React.useState('')
    const [tempoformalizacao,setTempoformalizacao] = React.useState('')
    const [naturezajuridica,setNaturezajuridica] = React.useState('')
    
    React.useEffect(()=>{
        console.log(cookie['ionic-user'])
        const logado = cookie['ionic-user']
        setEmpresacontratada(logado.nome)
        setCnpj(logado.cnpj)
        
    },[])

    const sendData = ()=>{
        console.log(cookie)
        const logado = cookie['ionic-user']
        console.log(logado)
        const dados={
            id:logado.ID,
            empresacontratada,
            cnpj,        
            datafundacao,
            tempoformalizacao,
            naturezajuridica
        }

    if(!ValidaCampo()){

        axios.post('http://localhost:5000/colab/novo',dados).then(res=>{
            M.toast({html:'Cadastro Realizado com Sucesso !', classes:"modal1 rounded"})
            navigate('/')

        }).catch(erro=>{
            console.error('Erro', erro.response)
        })
    }       
    }

    const ValidaCampo = ()=>{
        let faltaDados = false
        if(datafundacao === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Data de Fundação !', classes:"modalerro rounded"})
        }

        if(tempoformalizacao === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Tempo Formalização !', classes:"modalerro rounded"})
        }

        if(naturezajuridica === ''){
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
                        <input value={empresacontratada} placeholder="Nome Empresa" id="first_name2" type="text" className="validate" onChange={ (e) => setEmpresacontratada(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Nome Empresa</label>
                    </div>
                    <div className="input-field col s6">
                        <input value = {cnpj} placeholder="CNPJ" id="first_name2" type="text" className="validate"onChange={ (e) => setCnpj(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">CNPJ</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={datafundacao}  placeholder="Data Fundação" id="first_name2" type="text" className="validate" onChange={ (e) => setDatafundacao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Data Fundação</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={tempoformalizacao} placeholder="Tempo Formalização" id="first_name2" type="text" className="validate" onChange={ (e) => setTempoformalizacao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Tempo Formalização</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={naturezajuridica}  placeholder="Natureza Jurídica" id="first_name2" type="text" className="validate" onChange={ (e) => setNaturezajuridica(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Natureza Jurídica</label>
                    </div>
                </div>
            </div>
            <a className="waves-effect waves-light btn-large btnAzul" onClick={sendData}>Enviar</a>            
        </form>

    </div>          
    )
}
export default DadosEmpresa