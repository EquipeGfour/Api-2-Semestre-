import React, { useState } from "react"
import "./meuPerfil.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";

const MeuPerfil: React.FC = (props) => {
const [idpessoal,setIdpessoal] = useState('')
const { id } = useParams();
const [cookie,setCookie] = useCookies(['ionic-user', 'ionic-JWT'])
const [nome, setNome]=useState('');
const [cargo, setCargo]=useState('');
const [departamento, setDepartamento]=useState('');
const [cpf, setCpf]=useState('');
const [rg,setRg]=useState('')
const [nacionalidade, setNacionalidade]=useState('');
const [naturalidade, setNaturalidade]=useState('');
const [email, setEmail]=useState('');
const [genero, setGenero]=useState('');
const [telefone, setTelefone]=useState('');
const [raca, setRaca]=useState('');
const [dataNascimento, setDataNascimento]=useState('');
const [rua, setRua]=useState('');
const [estado, setEstado]=useState('');
const [cidade, setCidade]=useState('');
const [bairro, setBairro]=useState('');
const [cep, setCep]=useState('');
const [complemento, setComplemento]=useState('');
const [regiao, setRegiao]=useState(''); 
const [estado_civil, setEstado_civil] = useState('')
// --- Bloco Formação Acadêmica --- //
const [formacoes,setFormacoes] = React.useState([])
const [formacao, setFormacao] = React.useState('')    
const [status, setStatus] = React.useState('')
const [instituicao, setInstituicao] = React.useState('')
const [ano, setAno] = React.useState('')
// --- Bloco Formação Cursos Extra-Curriculares --- //
const [cursoex,setCursoex] = React.useState([])
const [extracurso, setExtracurso] = React.useState('')
const [extrainstituicao, setExtrainstituicao] = React.useState('')
const [extraano, setExtraano] = React.useState('')
const [extracarga, setExtracarga] = React.useState('')
// --- Bloco Idiomas --- //
const [blocoidioma,setBlocoidioma] = React.useState([])
const [extraidioma, setExtraidioma] = React.useState('')
const [statusidioma, setStatusidioma] = React.useState('')
const [arquivos,setArquivos] = useState([])
const [download, setDownload] = useState('')

const getColabById = () => {
    const logado = cookie['ionic-user']
    setIdpessoal(logado.id)
    axios.get(`/api/colab/funcionario/${logado.id}`, { headers: CriaHeader() }).then(res => {
    
    setNome(res.data.nome);
    setCargo(res.data.cargo?.cargo);
    setDepartamento(res.data.cargo?.departamento.area);
    setCpf(res.data.pessoa_fisica?.cpf);
    setRg(res.data.rg)
    setNaturalidade(res.data.naturalidade);
    setNacionalidade(res.data.nacionalidade);
    setEmail(res.data.email);
    setGenero(res.data.genero);
    setTelefone(res.data.telefone);
    setRaca(res.data.raca);
    setDataNascimento(res.data.data_nascimento);
    setRua(res.data.endereco?.rua);
    setEstado(res.data.endereco?.estado);
    setCidade(res.data.endereco?.cidade);
    setBairro(res.data.endereco?.bairro);
    setCep(res.data.endereco?.cep);
    setComplemento(res.data.endereco?.complemento);
    setEstado_civil(res.data.estado_civil);
    setRegiao(res.data.endereco?.regiao);
    setFormacoes(res.data.DadosAcademicos.filter( item => item.formacao))
    setCursoex(res.data.DadosAcademicos.filter(item => item.extra_curricular))
    setBlocoidioma(res.data.DadosAcademicos.filter(item => item.idioma))

})
}
    React.useEffect(() => { 
        getColabById()     
        document.title = 'Meu-Perfil'
        var el = document.querySelector('#tabs-swipe-demo')
        var instance = M.Tabs.init(el, Option);
    }, [])

    return(
    <div>
        <div className="container perfil1">
            <img className="responsive-img fotoColabperfil" src={Colab}/>
            <div className="row">
                <form className="col s12 dadosBasicosperfil">
                    <div className="">
                        <div className="input-field col s4">
                            <input id="dadoRecebidoperfil" type="text" className="validate" value={nome}onChange={()=>setNome(nome)}/>
                            <label className="fonte" htmlFor="icon_prefix">Nome Completo</label>
                        </div>
                    </div>
                        <div className="input-field col s4">
                            <input id="dadoRecebidoperfil" type="text" className="validate" value={departamento}onChange={()=>setDepartamento(departamento)}/>
                            <label className="fonte" htmlFor="icon_prefix">Departamento</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="dadoRecebidoperfil" type="text" className="validate" value={cargo}onChange={()=>setCargo(cargo)} />
                            <label className="fonte" htmlFor="icon_prefix">Cargo</label>
                        </div>
                </form>
            </div>
        </div>

        {/* -----------------------------------ABAS DO FUNCIONÁRIO------------------------------------------- */}
        <div className="container perfil1">
            <ul id="tabs-swipe-demo" className="tabs cabecalho">
                <li className="tab col s3"><a href="#test-swipe-2">Dados Pessoais</a></li>
                <li className="tab col s3"><a href="#test-swipe-1">Endereço</a></li>
                <li className="tab col s3"><a href="#test-swipe-3">Dados Acadêmicos</a></li>
                <li className="tab col s3"><a href="#test-swipe-4">Redefinir Senha</a></li>         
            </ul>

        {/* -----------------------------------DADOS PESSOAIS------------------------------------------- */}
            <div id="test-swipe-2" className="col s12">
            <form>
                <div className="col s12 dadosPessoaisperfil">
                <div className="row">
                    <div className=" input-field col s4 espaço">
                        <input placeholder="CPF" id="first_name2" type="text" className="validate dadoRecebido1" value={cpf}onChange={()=>setCpf(cpf)} />
                        <label className="active fonte" htmlFor="first_name2">CPF</label>
                        </div>
                    <div className=" input-field col s4 espaço">
                        <input placeholder="RG" id="first_name2" type="text" className="validate" value={rg}onChange={()=>setRg} />
                        <label className="active fonte" htmlFor="first_name2">RG</label>
                    </div>
                    <div className=" input-field col s4 espaço">
                        <input placeholder="Data Nascimento" id="first_name2" type="text" className="validate" value={dataNascimento}onChange={()=>setDataNascimento} />
                        <label className="active fonte" htmlFor="first_name2">Data Nascimento</label>
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
                        <input placeholder="Nacionalidade" id="first_name2" type="text" className="validate" value={nacionalidade}onChange={()=>setNacionalidade} />
                        <label className="active fonte" htmlFor="first_name2">Nacionalidade</label>
                    </div>

                    <div className=" input-field col s4 espaço">
                        <input placeholder="Naturalidade" id="first_name2" type="text" className="validate" value={naturalidade}onChange={()=>setNaturalidade}/>
                        <label className="active fonte" htmlFor="first_name2">Naturalidade</label>
                    </div>

                    <div className=" input-field col s4 espaço">
                        <input placeholder="Estado Civil" id="first_name2" type="text" className="validate" value={estado_civil}onChange={()=>setEstado_civil}/>
                        <label className="active fonte" htmlFor="first_name2">Estado Civil</label>
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
                        <input placeholder="Rua/Número" id="first_name2" type="text" className="validate" value={rua}onChange={()=>setRua} />
                        <label className="active fonte" htmlFor="first_name2">Rua/Número</label>
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
                {/*----------Formação----------*/}
                                                    
                                
                <div className="col s12 dadosPessoais">
                    <div className='nomeIdioma'><h5>Formação Acadêmica</h5></div>  
                    <table className="highlight responsive-table centered tabelainformacoes">
                        <thead>
                        <tr>
                            <th className="tamanhocampo">Formação</th>
                            <th className="tamanhocampo">Instituição</th>
                            <th className="tamanhocampo">Status</th>
                            <th className="tamanhocampo">Ano Conclusão/Previsto</th>
                        </tr>
                        </thead>
                        <tbody>
                        {formacoes.map((f,i)=>(
                        <tr key={i}>
                            <td>{f.formacao}</td>
                            <td>{f.instituicao}</td>
                            <td>{f.status_curso}</td>
                            <td>{f.ano_conclusao}</td>
                        </tr>
                        ))} 
                        </tbody>
                    </table>
                    </div>

                    <form>
                {/*----------Cursos----------*/}
                                                    
                                
                <div className="col s12 dadosPessoais">
                    <div className='nomeIdioma'><h5>Cursos Extra-Curriculares</h5></div>  
                    <table className="highlight responsive-table centered tabelainformacoes">
                        <thead>
                        <tr>
                            <th className="tamanhocampo">Curso</th>
                            <th className="tamanhocampo">Instituição</th>
                            <th className="tamanhocampo">Ano Conclusão</th>
                            <th className="tamanhocampo">Carga Horária</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cursoex.map((c,i)=>(
                        <tr key={i}>
                            <td>{c.extra_curricular}</td>
                            <td>{c.instituicao}</td>
                            <td>{c.ano_conclusao}</td>
                            <td>{c.carga_horaria}</td>
                        </tr>
                        ))} 
                        </tbody>
                    </table>
                    </div>
            </form>
            <form>
                {/*----------Idiomas----------*/}
                                                    
                                
                <div className="col s12 dadosPessoais">
                    <div className='nomeIdioma'><h5>Nível de Idiomas</h5></div>  
                    <table className="highlight responsive-table centered tabelainformacoes">
                        <thead>
                        <tr>
                            <th className="tamanhocampoidioma">Idioma</th>
                            <th className="tamanhocampoidioma">Nivel</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blocoidioma.map((b,i)=>(
                        <tr key={i}>
                            <td>{b.idioma}</td>
                            <td>{b.status_curso}</td>
                        </tr>
                        ))} 
                        </tbody>
                    </table>
                    </div>
            </form>
            </form>
            </div>
        {/* -----------------------------------REDEFINIR DADOS------------------------------------------- */}
            <div id="test-swipe-4" className="col s12 ">
                <Link to={'/redefinir-senha'}>
                <a className="waves-effect waves-light btn-large btnAzulsenha">Redefinir senha</a>
                </Link>
            </div>
            <div id="test-swipe-4" className="col s12 ">
                <Link to={'/redefinir-dados'}>
                <a className="waves-effect waves-light btn-large btnAzulsenha">Redefinir Dados</a>
                </Link>
            </div>
        </div>   
    </div>
    )
}
export default MeuPerfil;