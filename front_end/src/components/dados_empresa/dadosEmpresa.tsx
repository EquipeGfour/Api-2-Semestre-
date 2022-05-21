import React from 'react'
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from '../../functions';


const DadosEmpresa:React.FC=(props)=>{
    const navigate = useNavigate()
    const [cookie,setCookie]=useCookies(['ionic-user'])
    
    const [nomecompleto,setNomecompleto] = React.useState('')
    const [cnpj,setCnpj] = React.useState('')
    const [rg,setRg] = React.useState('')
    const [nacionalidade,setNacionalidade] = React.useState('')
    const [naturalidade,setNaturalidade] = React.useState('')
    const [genero,setGenero] = React.useState('')
    const [raca,setRaca] = React.useState('')
    const [datanascimento,setDatanascimento] = React.useState('')
    const [complemento,setComplemento] = React.useState('')
    const [rua,setRua] = React.useState('')
    const [bairro,setBairro] = React.useState('')
    const [cidade,setCidade] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [cep,setCep] = React.useState('')
    const [telefone,setTelefone] = React.useState('')
    const [regiao,setRegiao] = React.useState('')
    const [estadocivil,setEstadocivil] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [status,setStatus] = React.useState('')

    React.useEffect(()=>{
        console.log(cookie['ionic-user'])
        const logado = cookie['ionic-user']
        setNomecompleto(logado.nome)
        setCnpj(logado.cnpj)
        setEmail(logado.email)        
        document.title='Dados Empresa'
        var dateOptions = { 
            firstDay: true, 
            format: 'yyyy-mm-dd',
            i18n: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                monthsShort: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                weekdays: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                weekdaysShort: ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                weekdaysAbbrev: ["D","S", "T", "Q", "Q", "S", "S"]
            },
            yearRange:80,
            onSelect:(value) => setDatanascimento(value.toISOString().split("T")[0])
        }
        var elemsdate = document.querySelectorAll('.datepicker');
        var instancesdate = M.Datepicker.init(elemsdate,dateOptions);

        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        
    },[])

    const sendData = ()=>{
        console.log(cookie)
        const logado = cookie['ionic-user']
        console.log(logado)
        const dados={
            id:logado.id,
            nome:nomecompleto,
            cnpj,
            rg,        
            nacionalidade,
            naturalidade,
            genero,
            raca,
            data_nascimento:datanascimento,
            complemento,
            rua,
            bairro,
            estado,
            cidade,
            cep,
            telefone,
            regiao,
            estado_civil:estadocivil,
            email,
            status
        }

    if(!ValidaCampo()){

        axios.post('/api/colab/cnpj',dados, {headers:CriaHeader()}).then(res=>{

        M.toast({html:'Cadastro Realizado com Sucesso !', classes:"modal1 rounded"})
            navigate('/upload')

        }).catch(erro=>{
            console.error('Erro', erro.response)
        })
    }
       
    }

    const ValidaCampo = ()=>{
        let faltaDados = false

        if(rg === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo RG!', classes:"modalerro rounded"})
        }

        if(nacionalidade === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Nacionalidade !', classes:"modalerro rounded"})
        }

        if(naturalidade === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Naturalidade !', classes:"modalerro rounded"})
        }

        if(genero === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Gênero !', classes:"modalerro rounded"})
        }

        if(raca === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Raça!', classes:"modalerro rounded"})
        }

        if(datanascimento === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Data de Nascimento!', classes:"modalerro rounded"})
        }

        if(rua === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Rua!', classes:"modalerro rounded"})
        }

        if(estado === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Estado!', classes:"modalerro rounded"})
        }

        if(bairro === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Bairro !', classes:"modalerro rounded"})
        }

        if(cidade=== ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Cidade !', classes:"modalerro rounded"})
        }

        if(cep === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Cep!', classes:"modalerro rounded"})
        }

        if(telefone === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Telefone !', classes:"modalerro rounded"})
        }

        if(regiao === ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Região !', classes:"modalerro rounded"})
        }

        if(estadocivil=== ''){
            faltaDados = true
            M.toast({html:'Preencha o campo Estado Civil !', classes:"modalerro rounded"})
        }
        return faltaDados

    }

    return(

    <div>
    <div className="dadosContainer titulo">
    <span>Cadastro Pessoa Jurídica </span>
    </div>
    <form>

    <ul className="collapsible expandable infodep1">
    <li>
      <div className="collapsible-header infodep infodep"><i className="material-icons">location_city</i>Dados Empresa</div>
      <div className="collapsible-body">
        <div className="row">
            <div className="input-field col s6">
                <input value={nomecompleto} placeholder="Nome Completo" id="first_name2" type="text" className="validate" onChange={ (e) => setNomecompleto(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Nome Completo</label>
            </div>

            <div className="input-field col s6">
                <input value = {cnpj} placeholder="CNPJ" id="first_name2" type="text" className="validate"onChange={ (e) => setCnpj(e.target.value) }/>
                <label className="active" htmlFor="first_name2">CNPJ</label>
            </div>

            <div className="input-field col s6">
                <input value={rg} placeholder="RG" id="first_name2" type="text" className="validate" onChange={ (e) => setRg(e.target.value) }/>
                <label className="active" htmlFor="first_name2">RG</label>
            </div>

            <div className="input-field col s6">
                <input value={email} placeholder="email" id="first_name2" type="text" className="validate"onChange={ (e) => setEmail(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Email</label>
            </div>

            <div className="input-field col s6">
                <input value={telefone} placeholder="(DDD) Telefone" id="first_name2" type="text" className="validate" onChange={ (e) => setTelefone(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Telefone</label>
            </div>

            <div className="input-field col s6">
                <input value={estadocivil} placeholder="Estado Civil" id="first_name2" type="text" className="validate" onChange={ (e) => setEstadocivil(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Estado Civil</label>                 
            </div>

            <div className="input-field col s6">
                <input value={nacionalidade} placeholder="Nacionalidade" id="first_name2" type="text" className="validate" onChange={ (e) => setNacionalidade(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Nacionalidade</label>
            </div>

            <div className="input-field col s6">
                <input value={naturalidade} placeholder="Naturalidade" id="first_name2" type="text" className="validate" onChange={ (e) => setNaturalidade(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Naturalidade</label>
            </div>

            <div className="input-field col s6">
                <input value={genero} placeholder="Gênero" id="first_name2" type="text" className="validate" onChange={ (e) => setGenero(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Gênero</label>
            </div>

            <div className="input-field col s6">
                <input value={raca} placeholder="Raça" id="first_name2" type="text" className="validate" onChange={ (e) => setRaca(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Raça</label>
            </div>

            <div className="input-field col s6">
                <input value={datanascimento} placeholder="Data de Nascimento" id="first_name2" type="text" className="datepicker validate" onChange={ (e) => setDatanascimento(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Data de Nascimento</label>
            </div>

        </div>              
     </div>

    </li>
    <li>
      <div className="collapsible-header infodep"><i className="material-icons">place</i>Endereço</div>
      <div className="collapsible-body">
          <span>
            <div className="row"> 
            

            <div className="input-field col s6">
                <input value={rua} placeholder="Rua/Número" id="first_name2" type="text" className="validate" onChange={ (e) => setRua(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Rua/Número</label>
            </div>

            <div className="input-field col s6">
                <input value={complemento} placeholder="Complemento" id="first_name2" type="text" className="validate" onChange={ (e) => setComplemento(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Complemento</label>
            </div>


            <div className="input-field col s6">
                <input value={bairro} placeholder="Bairro" id="first_name2" type="text" className="validate"onChange={ (e) => setBairro(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Bairro</label>
            </div>

            <div className="input-field col s6">
                <input value={cidade} placeholder="Cidade" id="first_name2" type="text" className="validate"onChange={ (e) => setCidade(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Cidade</label>
            </div>

            <div className="input-field col s6">
                <input value={estado} placeholder="Estado" id="first_name2" type="text" className="validate" onChange={ (e) => setEstado(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Estado</label>
            </div>

            <div className="input-field col s6">
                <input value={regiao} placeholder="Região" id="first_name2" type="text" className="validate" onChange={ (e) => setRegiao(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Região</label>
            </div>

            <div className="input-field col s6">
                <input value={cep} placeholder="CEP" id="first_name2" type="text" className="validate" onChange={ (e) => setCep(e.target.value) }/>
                <label className="active" htmlFor="first_name2">CEP</label>
            </div>
            </div> 
          </span></div>
    </li>
    </ul>
    <div className='centro'><a className="waves-effect waves-light btn-large btnAzulcadastro" onClick={sendData}>Enviar</a></div>
    </form>
    </div>
    


      
          
    )
}
export default DadosEmpresa