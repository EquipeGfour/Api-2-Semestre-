import React, { Component, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./redefinirDados.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import M from 'materialize-css/dist/js/materialize'
import { CriaHeader } from '../../functions';
import { navigate } from '../../functions/navigation';
import { getValue } from '@testing-library/user-event/dist/utils';


const RedefinirDados: React.FC = (props) => {

    // colaborador
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['ionic-user', 'ionic-JWT'])
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [estado_civil, setEstado_civil] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [naturalidade, setNaturalidade] = useState('')
    const [genero, setGenero] = useState('')
    const [raca, setRaca] = useState('')

    // endereco

    const [rua, setRua] = useState('')
    const [complemento, setComplemento ] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [regiao, setRegiao] = useState('')
    const [cep, setCep] = useState('')

    const updateDadosUser = () => {

        const dados = {
            nome,
            telefone,
            estado_civil,
            nacionalidade,
            naturalidade,
            genero,
            raca,
            rua,
            complemento,
            bairro,
            cidade,
            estado,
            regiao,
            cep,
            endereco:{
                rua,
                complemento,
                bairro,
                cidade,
                estado,
                regiao,
                cep
            }
        }
        const logado = cookie['ionic-user']
        axios.put(`/api/colab/editColab/${logado.id}`, dados, { headers: CriaHeader() }).then(res => {
            setNome(null)
            setTelefone(null)
            setEstado_civil(null)
            setNacionalidade(null)
            setNaturalidade(null)
            setGenero(null)
            setRaca(null)
            setRua(null)
            setComplemento(null)
            setBairro(null)
            setCidade(null)
            setEstado(null)
            setRegiao(null)
            setCep(null)
            M.toast({ html: 'Dados alterados com sucesso!', classes: "modal1 rounded" })

            navigate('/home-colaborador/meu-perfil')
            
        }).catch(erro => {
            console.error('Erro', erro.response)
        })
    }

    const getDadosColab = () => {
        const logado = cookie['ionic-user']
        axios.get(`/api/colab/funcionario/${logado.id}`, { headers: CriaHeader() }).then(res => {
            console.log(res.data)
            setNome(res.data.nome);
            setNaturalidade(res.data.naturalidade);
            setNacionalidade(res.data.nacionalidade);
            setGenero(res.data.genero);
            setEstado_civil(res.data.estado_civil)
            setTelefone(res.data.telefone);
            setRaca(res.data.raca);
            setRua(res.data.endereco?.rua);
            setEstado(res.data.endereco?.estado);
            setCidade(res.data.endereco?.cidade);
            setBairro(res.data.endereco?.bairro);
            setCep(res.data.endereco?.cep);
            setComplemento(res.data.endereco?.complemento);
            setRegiao(res.data.endereco?.regiao);
        })
    }


    React.useEffect(() => {
        document.title = 'Redefinir Dados'
        getDadosColab()

        var elemsdate = document.querySelectorAll('.datepicker');
        var instancesdate = M.Datepicker.init(elemsdate, dateOptions);
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);

    }, [])

    return (
        <div>
            <div className="containerRedefinir">
                <span>Redefinir Dados</span>
            </div>

            <form>
                <ul className="collapsible expandable infodep1">
                    <li>
                        <div className="collapsible-header infodep infodep"><i className="material-icons">account_box</i>Dados Pessoais</div>
                            <div className="collapsible-body">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input value={nome} placeholder="Nome Completo" id="first_name2" type="text" className="validate" onChange={(e) => setNome(e.target.value)} />
                                        <label className="active" htmlFor="first_name2">Nome Completo</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={telefone} placeholder="(DDD) Telefone" id="first_name2" type="text" className="validate" onChange={(e) => setTelefone(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Telefone</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={estado_civil} placeholder="Estado Civil" id="first_name2" type="text" className="validate" onChange={(e) => setEstado_civil(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Estado Civil</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={nacionalidade} placeholder="Nacionalidade" id="first_name2" type="text" className="validate" onChange={(e) => setNacionalidade(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Nacionalidade</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={naturalidade} placeholder="Naturalidade" id="first_name2" type="text" className="validate" onChange={(e) => setNaturalidade(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Naturalidade</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={genero} placeholder="Gênero" id="first_name2" type="text" className="validate" onChange={(e) => setGenero(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Gênero</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input value={raca} placeholder="Raça" id="first_name2" type="text" className="validate" onChange={(e) => setRaca(e.target.value)}/>
                                        <label className="active" htmlFor="first_name2">Raça</label>
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
                                                <input value={rua} placeholder="Rua/Número" id="first_name2" type="text" className="validate" onChange={(e) => setRua(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Rua/Número</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={complemento} placeholder="Complemento" id="first_name2" type="text" className="validate" onChange={(e) => setComplemento(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Complemento</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={bairro} placeholder="Bairro" id="first_name2" type="text" className="validate" onChange={(e) => setBairro(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Bairro</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={cidade} placeholder="Cidade" id="first_name2" type="text" className="validate" onChange={(e) => setCidade(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Cidade</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={estado} placeholder="Estado" id="first_name2" type="text" className="validate" onChange={(e) => setEstado(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Estado</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={regiao} placeholder="Região" id="first_name2" type="text" className="validate" onChange={(e) => setRegiao(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">Região</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input value={cep} placeholder="CEP" id="first_name2" type="text" className="validate" onChange={(e) => setCep(e.target.value)}/>
                                                <label className="active" htmlFor="first_name2">CEP</label>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            
                            
                    </li>               
                    
                </ul>
            </form>

            <div className="botaoRedefinir">
                <a className="waves-effect waves-light btn-large btnAzulnovo" onClick={updateDadosUser}>Redefinir</a>
            </div>
        </div>
    )
}

export default RedefinirDados

function dateOptions(elemsdate: NodeListOf<Element>, dateOptions: any) {
    throw new Error('Function not implemented.');
}
