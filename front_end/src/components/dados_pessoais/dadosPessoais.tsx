import React from 'react'
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'

const DadosPessoais:React.FC=(props)=>{
    const [cookie,setCookie]=useCookies(['ionic-user'])
    

    const [nomecompleto,setNomecompleto] = React.useState('')
    const [cpf,setCpf] = React.useState('')
    const [nacionalidade,setNacionalidade] = React.useState('')
    const [naturalidade,setNaturalidade] = React.useState('')
    const [genero,setGenero] = React.useState('')
    const [raca,setRaca] = React.useState('')
    const [datanascimento,setDatanascimento] = React.useState('')
    const [complemento,setComplemento] = React.useState('')
    const [endereco,setEndereco] = React.useState('')
    const [bairro,setBairro] = React.useState('')
    const [cidade,setCidade] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [cep,setCep] = React.useState('')
    const [telefone,setTelefone] = React.useState('')
    const [regiao,setRegiao] = React.useState('')
    const [estadocivil,setEstadocivil] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [linguas,setLinguas] = React.useState('')
    const [formacao,setFormacao] = React.useState('')
    const [curso,setCurso] = React.useState('')
    const [status,setStatus] = React.useState('')

    React.useEffect(()=>{
        console.log(cookie['ionic-user'])
        const logado = cookie['ionic-user']
        setNomecompleto(logado.nome)
        setCpf(logado.cpf)
        setEmail(logado.email)
    },[])

    const sendData = ()=>{
        const dados={
            nome:nomecompleto,
            cpf,        
            nacionalidade,
            naturalidade,
            genero,
            raca,
            data_nascimento:datanascimento,
            complemento,
            endereco,
            bairro,
            cidade,
            cep,
            telefone,
            regiao,
            estado_civil:estadocivil,
            email,
            linguas,
            formacao,
            curso,
            status
        }

        axios.post('http://localhost:5000/colab/novo',dados).then(res=>{
            console.log(res)

        }).catch(erro=>{
            console.error('Erro', erro.response)

        })

    }

    return(
        <div className="dadosContainer row dados_pessoais">
            <h1>Dados Pessoais</h1>
            <form>
            <div className="col s12 esquerda">
                <div className="row">
                    <div className="input-field col s6">
                        <input value={nomecompleto} placeholder="Nome Completo" id="first_name2" type="text" className="validate" onChange={ (e) => setNomecompleto(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Nome Completo</label>
                    </div>
                    <div className="input-field col s6">
                        <input value = {cpf} placeholder="CPF" id="first_name2" type="text" className="validate"onChange={ (e) => setCpf(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">CPF</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={nacionalidade} placeholder="Nacionalidade" id="first_name2" type="text" className="validate" onChange={ (e) => setNacionalidade(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Nacionalidade</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={naturalidade} placeholder="Naturalidade" id="first_name2" type="text" className="validate" onChange={ (e) => setNaturalidade(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Naturalidade</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input value={genero} placeholder="Gênero" id="first_name2" type="text" className="validate" onChange={ (e) => setGenero(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Gênero</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={raca} placeholder="Raça" id="first_name2" type="text" className="validate" onChange={ (e) => setRaca(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Raça</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={datanascimento} placeholder="Data de Nascimento" id="first_name2" type="text" className="validate" onChange={ (e) => setDatanascimento(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Data de Nascimento</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={complemento} placeholder="Complemento" id="first_name2" type="text" className="validate" onChange={ (e) => setComplemento(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Complemento</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={endereco} placeholder="Endereço (Rua ou Avenida e Número)" id="first_name2" type="text" className="validate" onChange={ (e) => setEndereco(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Endereço</label>
                    </div>

                     <div className="input-field col s6">
                        <input value={bairro} placeholder="Bairro" id="first_name2" type="text" className="validate" onChange={ (e) => setBairro(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Bairro</label>
                    </div>

                </div>

                <div className="row">
                   
                    <div className="input-field col s6">
                        <input value={cidade} placeholder="Cidade" id="first_name2" type="text" className="validate"onChange={ (e) => setCidade(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Cidade</label>
                    </div>

                    <div className="input-field col s6">
                        <input value={estado} placeholder="Estado" id="first_name2" type="text" className="validate"onChange={ (e) => setEstado(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Estado</label>
                    </div>

                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input value={cep} placeholder="CEP" id="first_name2" type="text" className="validate" onChange={ (e) => setCep(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">CEP</label>
                    </div>

                    <div className="input-field col s6">
                        <input value={telefone} placeholder="(DDD) Telefone" id="first_name2" type="text" className="validate" onChange={ (e) => setTelefone(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Telefone</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={regiao} placeholder="Região" id="first_name2" type="text" className="validate" onChange={ (e) => setRegiao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Região</label>
                    </div>

                    <div className="input-field col s6">
                        <input value={estadocivil} placeholder="Estado Civil" id="first_name2" type="text" className="validate" onChange={ (e) => setEstadocivil(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Estado Civil</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={email} placeholder="Email" id="first_name2" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Email</label>                   

                    </div>

                    <div className="input-field col s6">
                        <input value={linguas} placeholder="Idiomas" id="first_name2" type="text" className="validate"onChange={ (e) => setLinguas(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Línguas</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value={formacao} placeholder="Formação" id="first_name2" type="text" className="validate" onChange={ (e) => setFormacao(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Formação</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={curso} placeholder="Curso" id="first_name2" type="text" className="validate" onChange={ (e) => setCurso(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Curso</label>
                    </div>
                </div>



                <div className="row">
                    <div className="input-field col s6">
                        <input value={status} placeholder="Status" id="first_name2" type="text" className="validate" onChange={ (e) => setStatus(e.target.value) }/>
                        <label className="active" htmlFor="first_name2">Status</label>
                    </div>

                </div>

                <a className="waves-effect waves-light btn-large btnAzul" onClick={sendData}>Enviar</a>

            </div>
            </form>

        </div>
          
    )
}
export default DadosPessoais