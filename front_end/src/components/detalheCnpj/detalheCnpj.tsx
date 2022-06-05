import React, { useState } from "react"
import "./style.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";
import fileDownload from "js-file-download";

const DetalheCnpj: React.FC = (props) => {
  const { id } = useParams();
  const [nomeempresa, setNomeEmpresa]=useState('');
  const [cargo, setCargo]=useState('');
  const [departamento, setDepartamento]=useState('');
  const [email, setEmail]=useState('');
  const [telefone, setTelefone]=useState(''); 
  const [rua, setRua]=useState('');
  const [estado, setEstado]=useState('');
  const [cidade, setCidade]=useState('');
  const [bairro, setBairro]=useState('');
  const [cep, setCep]=useState('');
  const [complemento, setComplemento]=useState('');
  const [regiao, setRegiao]=useState('');
  const [status,setStatus]=useState('');
  const [cnpj, setCnpj]=useState('');
  const [datafundacao, setDataFundacao]=useState('');
  const [nomerepresentante, setNomeRepresentante]=useState('');  
  const [arquivos,setArquivos] = useState([]);
  const [download, setDownload] = useState('');

  const gerarpdf = () => {
    setStatus('Gerando PDF...')
    const getUrl = window.location;     
    const baseUrl = getUrl.host.includes("3000")? "localhost:5000" : getUrl.host;
    const url = getUrl.protocol + "//" + baseUrl + "/api/pdf/gerarpdf?id=" + id;
    fetch (url, { method: 'GET',headers: CriaHeader()})
    .then(res => res.blob())
    .then(blob => {
      const _url = window.URL.createObjectURL(blob);
      setStatus('');
      window.open(_url, '_blank').focus();
    })
    .catch(err => console.log(err));
  }

  const ListDownload = (id:string) => {
    axios.get(`/api/upload/listarArquivos/${id}`,{headers: CriaHeader()}).then(res=>{
      setArquivos(res.data.arquivos) 
    }).catch(err=>{
      console.log(err)
    })    
  }

  const downloadFile = (id,nome,extensao) =>{
    axios.get(`/api/upload/download/${id}`, {headers: CriaHeader(), responseType: 'blob'}).then(res=>{      
      console.log('Baixar',id)
      const unirarq = nome + extensao
      fileDownload(res.data, unirarq)
    }).catch(err=>{
      console.log(err)
    })
  }


  const getCnpj = (id) => {
    axios.get(`/api/pj/funcPj/${id}`, { headers: CriaHeader() }).then( res => {
      
      setNomeEmpresa(res.data.pessoa_juridica.empresa_contratada);
      setNomeRepresentante(res.data.nome)
      setCnpj(res.data.pessoa_juridica?.cnpj)
      setCargo(res.data.cargo?.cargo);
      setDepartamento(res.data.cargo?.departamento.area);     
      setEmail(res.data.email);
      setDataFundacao(res.data.pessoa_juridica.data_fundacao)      
      setTelefone(res.data.telefone);
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
    
    ListDownload(id)  
    getCnpj(id)   
    document.title = 'Detalhe-CNPJ'
    var el = document.querySelector('#tabs-swipe-demo')
    var instance = M.Tabs.init(el, Option);
  }, [])

  return (
    <div>
      <div className="container pjCor">
        <img className="responsive-img fotoColab" src={Colab}/>
        <div className="row">
          <form className="col s12 dadosBasicos">
            <div className="">
              <div className="input-field col s4">
                <input id="dadoRecebido" type="text" className="validate" value={nomeempresa}onChange={()=>setNomeEmpresa(nomeempresa)}/>
                <label className="fonte" htmlFor="icon_prefix">Nome Empresa</label>
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
      </div>

      {/* -----------------------------------ABAS Da Empresa------------------------------------------- */}
      <div className="container pjCor">
        <ul id="tabs-swipe-demo" className="tabs cabecalho">
          <li className="tab col s3"><a href="#test-swipe-2">Dados da Empresa</a></li>
          <li className="tab col s3"><a href="#test-swipe-1">Endereço</a></li>
          <li className="tab col s3"><a href="#test-swipe-4">Contrato</a></li>
          <li className="tab col s3"><a href="#test-swipe-5">Arquivos</a></li>
        </ul>

        <div id="test-swipe-2" className="col s12">
          <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="CNPJ" id="first_name2" type="text" className="validate dadoRecebido1" value={cnpj}onChange={()=>setCnpj(cnpj)} />
                  <label className="active fonte" htmlFor="first_name2">CNPJ</label>
                </div>

                <div className=" input-field col s4 espaço">
                  <input placeholder="Data Fundação" id="first_name2" type="text" className="validate" value={datafundacao}onChange={()=>setDataFundacao} />
                  <label className="active fonte" htmlFor="first_name2">Data Fundação</label>
                </div>             

                <div className=" input-field col s4 espaço">
                    <input placeholder="Email" id="first_name2" type="text" className="validate dadoRecebido1" value={email}onChange={()=>setEmail} />
                    <label className="active fonte" htmlFor="first_name2">Email</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                    <input placeholder="Telefone" id="first_name2" type="text" className="validate" value={telefone}onChange={()=>setTelefone}/>
                    <label className="active fonte" htmlFor="first_name2">Telefone</label>
                </div>

                <div className=" input-field col s4 espaço">
                    <input placeholder="Nome Representante" id="first_name2" type="text" className="validate" value={nomerepresentante}onChange={()=>setNomeRepresentante}/>
                    <label className="active fonte" htmlFor="first_name2">Nome Representante</label>
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

        {/* -----------------------------------CONTRATO------------------------------------------- */}
        <div id="test-swipe-4" className="col s12 ">
          <form>
            <div className="col s12 dadosPessoais text-white">
              <span>Clique em "Gerar PDF" para visualizar o contrato</span>
            </div>            
            <a className="waves-effect waves-light btn-large btnAzulPDF" onClick={gerarpdf}>
            {status ==="" ?"Gerar PDF" : "carregando..." } 
            </a>
          </form>
        </div>
        <br></br>

        {/* -----------------------------------ARQUIVO------------------------------------------- */}
        <div id="test-swipe-5" className="col s12 ">
          <form>
            <div className="col s12 dadosPessoais">
              <table className="highlight responsive-table centered tabelaUpload">
                <thead>
                  <tr>
                    <th>Nome do Arquivo</th>
                    <th>Tipo</th>
                    <th>Ver</th>
                    <th>Baixar Arquivo</th>
                  </tr>
                </thead>
                <tbody>
                  {arquivos.map((file,index)=>(
                  <tr key={index}>
                    <td>{file.nome_arquivos}</td>
                    <td>{file.tipo}</td>
                    <td>
                      {file.url_arquivo&&(<a href={file.url_arquivo} target='_blank'className="corionic">Link</a>)}
                    </td>                    
                    <td>
                    <ReactTooltip />
                    <Link to="">               
                      <i className="material-icons" data-tip='Baixar' onClick={()=>downloadFile(file.id,file.nome_arquivos,file.extensao)}>file_download</i>
                    </Link>   
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
              <br></br>
            </div>
          </form>
        </div>
    </div>
  </div> 
  )
}
export default DetalheCnpj