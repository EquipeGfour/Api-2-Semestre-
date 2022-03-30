import React from 'react'
import "./style.css"

function DadosPessoais(){
    return(
        <div className="dadosContainer row">
            <h1>Dados Pessoais</h1>
            <div className="col s12 esquerda">
                <div className="row">
                    <div className="input-field col s6">
                        <input value="Nome Completo" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Nome Completo</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="CPF" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">CPF</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="Nacionalidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Nacionalidade</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Naturalidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Naturalidade</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input value="Gênero" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Gênero</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Raça" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Raça</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="Data de Nascimento" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Data de Nascimento</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Idade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Idade</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input value="Endereço (Rua ou Avenida e Número)" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Endereço</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Complemento" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Complemento</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="Bairro" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Bairro</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Cidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Cidade</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input value="CEP" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">CEP</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Estado" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Estado</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="Região" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Região</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="(DDD) Telefone" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Telefone</label>
                    </div>
                </div>



                <div className="row">
                    <div className="input-field col s6">
                        <input value="Email" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Estado Civil" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Estado Civil</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="Formação" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Formação</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Curso" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Curso</label>
                    </div>
                </div>



                <div className="row">
                    <div className="input-field col s6">
                        <input value="Status" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Status</label>
                    </div>
                    <div className="input-field col s6">
                        <input value="Línguas" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Línguas</label>
                    </div>
                </div>

                <a className="waves-effect waves-light btn-large btnAzul">Enviar</a>

            </div>








            

        </div>
          
    )
}
export default DadosPessoais