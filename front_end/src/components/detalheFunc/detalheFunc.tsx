import React, { useState } from "react"
import "./style.css"
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { CriaHeader } from "../../functions"
import Colab from '../img/colab.png'
import M from 'materialize-css/dist/js/materialize'
import { useParams } from "react-router-dom"


const DetalheFunc: React.FC = (props) => {
  const { id } = useParams();
  const [nome, setNome]=useState('');
  const [cargo, setCargo]=useState('');
  const [departamento, setDepartamento]=useState('');
  const [cpf, setCpf]=useState('');
  const [nacionalidade, setNacionalidade]=useState('');
  const [naturalidade, setNaturalidade]=useState('');
  const [email, setEmail]=useState('');
  const [genero, setGenero]=useState('');
  const [telefone, setTelefone]=useState('');
  const [raca, setRaca]=useState('');
  const [dataNascimento, setDataNascimento]=useState('');
  const [endereco, setEndereco]=useState('');
  const [estado, setEstado]=useState('');
  const [cidade, setCidade]=useState('');
  const [bairro, setBairro]=useState('');
  const [cep, setCep]=useState('');
  const [complemento, setComplemento]=useState('');
  const [regiao, setRegiao]=useState('');
  const [formacao, setFormacao]=useState('');
  const [idiomas, setIdiomas]=useState('');
  const [curso, setCurso]=useState('');

  const getColabById = (id: string) => {
    axios.get(`http://localhost:5000/colab/funcionario/${id}`, { headers: CriaHeader() }).then(res => {
      console.log(res);
      setNome(res.data.nome);
      setCargo(res.data.Cargo.cargo);
      setDepartamento(res.data.Cargo.Departamento.area);
      setCpf(res.data.Pessoa_Fisica.cpf);
      setNaturalidade(res.data.naturalidade);
      setNacionalidade(res.data.nacionalidade);
      setEmail(res.data.email);
      setGenero(res.data.genero);
      setTelefone(res.data.telefone);
      setRaca(res.data.raca);
      setDataNascimento(res.data.data_nascimento);
      setEndereco(res.data.Enderecos[0].endereco);
      setEstado(res.data.Enderecos[0].estado);
      setCidade(res.data.Enderecos[0].cidade);
      setBairro(res.data.Enderecos[0].bairro);
      setCep(res.data.Enderecos[0].cep);
      setComplemento(res.data.Enderecos[0].complemento);
      setRegiao(res.data.Enderecos[0].regiao);
      setFormacao(res.data.DadosAcademicos[0].formacao);
      setIdiomas(res.data.DadosAcademicos[0].Idiomas);
      setCurso(res.data.DadosAcademicos[0].cursos);
    })
  }

  React.useEffect(() => {

    getColabById(id)
    document.title = 'Detalhe-Funcionário'
    var el = document.querySelector('#tabs-swipe-demo')
    var instance = M.Tabs.init(el, Option);
  }, [])


  return (
    <div>
      <div className="container">
        <img className="responsive-img fotoColab" src={Colab} />
        <div className="row">
          <form className="col s12 dadosBasicos">
            <div className="">
              <div className="input-field col s4">
                <input id="dadoRecebido" type="text" className="validate" value={nome}onChange={()=>setNome(nome)}/>
                <label className="fonte" htmlFor="icon_prefix">Nome Completo</label>
              </div>
            </div>
            <div className="input-field col s4">
              <input id="dadoRecebido" type="text" className="validate" value={departamento}onChange={()=>setDepartamento(departamento)}/>
              <label className="fonte" htmlFor="icon_prefix">Departamento</label>
            </div>
            <div className="input-field col s4">
              <input id="dadoRecebido" type="text" className="validate" value={cargo}onChange={()=>setCargo(cargo)} />
              <label className="fonte" htmlFor="icon_prefix">Cargo</label>
            </div>

          </form>

        </div>

        {/* -----------------------------------ABAS DO FUNCIONÁRIO------------------------------------------- */}
      </div>
      <div className="container">
        <ul id="tabs-swipe-demo" className="tabs cabecalho">
          <li className="tab col s3"><a href="#test-swipe-2">Dados Pessoais</a></li>
          <li className="tab col s3"><a href="#test-swipe-1">Endereço</a></li>
          <li className="tab col s3"><a href="#test-swipe-3">Dados Acadêmicos</a></li>
          <li className="tab col s3"><a href="#test-swipe-4">Contrato</a></li>
        </ul>


        <div id="test-swipe-2" className="col s12">
          <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="CPF" id="first_name2" type="text" className="validate dadoRecebido1" value={cpf}onChange={()=>setCpf(cpf)} />
                  <label className="active fonte" htmlFor="first_name2">CPF</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Nacionalidade" id="first_name2" type="text" className="validate" value={nacionalidade}onChange={()=>setNacionalidade} />
                  <label className="active fonte" htmlFor="first_name2">Nacionalidade</label>
                </div>

                <div className=" input-field col s4 espaço">
                  <input placeholder="Naturalidade" id="first_name2" type="text" className="validate" value={naturalidade}onChange={()=>setNaturalidade}/>
                  <label className="active fonte" htmlFor="first_name2">Naturalidade</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Email" id="first_name2" type="text" className="validate dadoRecebido1" value={email}onChange={()=>setEmail} />
                  <label className="active fonte" htmlFor="first_name2">Email</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Gênero" id="first_name2" type="text" className="validate" value={genero}onChange={()=>setGenero}/>
                  <label className="active fonte" htmlFor="first_name2">Gênero</label>
                </div>

                <div className=" input-field col s4 espaço">
                  <input placeholder="Telefone" id="first_name2" type="text" className="validate" value={telefone}onChange={()=>setTelefone}/>
                  <label className="active fonte" htmlFor="first_name2">Telefone</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Raça" id="first_name2" type="text" className="validate dadoRecebido1" value={raca}onChange={()=>setRaca}/>
                  <label className="active fonte" htmlFor="first_name2">Raça</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Data Nascimento" id="first_name2" type="text" className="validate" value={dataNascimento}onChange={()=>setDataNascimento} />
                  <label className="active fonte" htmlFor="first_name2">Data Nascimento</label>
                </div>
              </div>
            </div>
          </form>
        </div>


        {/* -----------------------------------ENDEREÇO------------------------------------------- */}
        <div id="test-swipe-1" className="col s12 ">
          <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Endereço" id="first_name2" type="text" className="validate" value={endereco}onChange={()=>setEndereco} />
                  <label className="active fonte" htmlFor="first_name2">Endereço</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Estado" id="first_name2" type="text" className="validate dadoRecebido1" value={estado}onChange={()=>setEstado} />
                  <label className="active fonte" htmlFor="first_name2">Estado</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Cidade" id="first_name2" type="text" className="validate" value={cidade}onChange={()=>setCidade} />
                  <label className="active fonte" htmlFor="first_name2">Cidade</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Bairro" id="first_name2" type="text" className="validate" value={bairro}onChange={()=>setBairro}/>
                  <label className="active fonte" htmlFor="first_name2">Bairro</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="CEP" id="first_name2" type="text" className="validate dadoRecebido1" value={cep}onChange={()=>setCep}/>
                  <label className="active fonte" htmlFor="first_name2">CEP</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Complemento" id="first_name2" type="text" className="validate" value={complemento}onChange={()=>setComplemento}/>
                  <label className="active fonte" htmlFor="first_name2">Complemento</label>
                </div>
              </div>
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Região" id="first_name2" type="text" className="validate" value={regiao}onChange={()=>setRegiao}/>
                  <label className="active fonte" htmlFor="first_name2">Região</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* -----------------------------------DADOS ACADÊMICOS------------------------------------------- */}
        <div id="test-swipe-3" className="col s12 ">
          <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Formação" id="first_name2" type="text" className="validate" value={formacao}onChange={()=>setFormacao}/>
                  <label className="active fonte" htmlFor="first_name2">Formação</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Curso" id="first_name2" type="text" className="validate dadoRecebido1" value={curso}onChange={()=>setCurso}/>
                  <label className="active fonte" htmlFor="first_name2">Curso</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Idiomas" id="first_name2" type="text" className="validate" value={idiomas}onChange={()=>setIdiomas}/>
                  <label className="active fonte" htmlFor="first_name2">Idiomas</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Status" id="first_name2" type="text" className="validate" />
                  <label className="active fonte" htmlFor="first_name2">Status</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* -----------------------------------CONTRATO------------------------------------------- */}
        <div id="test-swipe-4" className="col s12 ">
          <form>
            <div className="col s12 dadosPessoais">
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DetalheFunc