import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./redefinirDados.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import M from 'materialize-css/dist/js/materialize'
import { CriaHeader } from '../../functions';


const RedefinirDados: React.FC = (props) => {

    React.useEffect(() => {
        document.title = 'Redefinir Dados'

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
                                        <input placeholder="Nome Completo" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Nome Completo</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="CPF" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">CPF</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="RG" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">RG</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="email" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Email</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="(DDD) Telefone" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Telefone</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Estado Civil" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Estado Civil</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Nacionalidade" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Nacionalidade</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Naturalidade" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Naturalidade</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Gênero" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Gênero</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Raça" id="first_name2" type="text" className="validate" />
                                        <label className="active" htmlFor="first_name2">Raça</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input placeholder="Data de Nascimento" id="first_name2" type="text" className="datepicker validate" />
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
                                                <input placeholder="Rua/Número" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Rua/Número</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="Complemento" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Complemento</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="Bairro" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Bairro</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="Cidade" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Cidade</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="Estado" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Estado</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="Região" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">Região</label>
                                            </div>

                                            <div className="input-field col s6">
                                                <input placeholder="CEP" id="first_name2" type="text" className="validate" />
                                                <label className="active" htmlFor="first_name2">CEP</label>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            
                                
                    </li>               
                       
                </ul>
            </form>

            <div className="botaoRedefinir">
                <a className="waves-effect waves-light btn-large btnAzulnovo">Redefinir</a>
            </div>
        </div>
    )
}

export default RedefinirDados

function dateOptions(elemsdate: NodeListOf<Element>, dateOptions: any) {
    throw new Error('Function not implemented.');
}
