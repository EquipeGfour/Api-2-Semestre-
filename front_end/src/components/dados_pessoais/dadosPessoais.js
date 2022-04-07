import React from 'react'
import "./style.css"

function DadosPessoais(){
    return(
        <div className="dadosContainer row dados_pessoais">
            <h1>Dados Pessoais</h1>
            <form>
            <div className="col s12 esquerda">
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Nome Completo" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Nome Completo</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="CPF" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">CPF</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Nacionalidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Nacionalidade</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Naturalidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Naturalidade</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Gênero" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Gênero</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Raça" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Raça</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Data de Nascimento" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Data de Nascimento</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Complemento" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Complemento</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Endereço (Rua ou Avenida e Número)" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Endereço</label>
                    </div>

                     <div className="input-field col s6">
                        <input placeholder="Bairro" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Bairro</label>
                    </div>

                </div>

                <div className="row">
                   
                    <div className="input-field col s6">
                        <input placeholder="Cidade" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Cidade</label>
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Estado" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Estado</label>
                    </div>

                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="CEP" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">CEP</label>
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="(DDD) Telefone" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Telefone</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Região" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Região</label>
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Estado Civil" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Estado Civil</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Email" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Email</label>                   

                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Línguas" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Línguas</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Formação" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Formação</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Curso" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Curso</label>
                    </div>
                </div>



                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Status" id="first_name2" type="text" className="validate"/>
                        <label className="active" for="first_name2">Status</label>
                    </div>

                </div>

                <a className="waves-effect waves-light btn-large btnAzul">Enviar</a>

            </div>
            </form>

        </div>
          
    )
}
export default DadosPessoais