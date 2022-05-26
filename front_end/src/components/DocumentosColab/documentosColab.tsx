import React, { useState } from "react";
import "./documentos.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate, useParams} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import ReactTooltip from "react-tooltip";
import fileDownload from "js-file-download";


const DocColab:React.FC=()=>{
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
    const [formacao, setFormacao]=useState('');
    const [idiomas, setIdiomas]=useState('');
    const [curso, setCurso]=useState('');
    const [status,setStatus]=useState('');
  
    const [arquivos,setArquivos] = useState([])
    const [download, setDownload] = useState('')

/*Gerar PDF do Contrato*/
const gerarpdf = () => {
  const logado = cookie['ionic-user']
    setStatus('Gerando PDF...')
    const getUrl = window.location;     
    const baseUrl = getUrl.host.includes("3000")? "localhost:5000" : getUrl.host;
    const url = getUrl.protocol + "//" + baseUrl + "/api/pdf/gerarpdf?id=" + logado.id;
    fetch (url, { method: 'GET',headers: CriaHeader()})
    .then(res => res.blob())
    .then(blob => {
      const _url = window.URL.createObjectURL(blob);
      setStatus('');
      window.open(_url, '_blank').focus();
    })
    .catch(err => console.log(err));
  }

  /*Listar Downloads*/
  const ListDownload = (id:string) => {
    const logado = cookie['ionic-user']
    axios.get(`/api/upload/listarArquivos/${logado.id}`,{headers: CriaHeader()}).then(res=>{
      console.log(res)
      setArquivos(res.data.arquivos) 
    }).catch(err=>{
      console.log(err)
    })
    
}
    /* Download Arquivo*/
  const downloadFile = (id,nome,extensao) =>{
    axios.get(`/api/upload/download/${id}`, {headers: CriaHeader(), responseType: 'blob'}).then(res=>{      
      console.log('Baixar',id)
      const unirarq = nome + extensao
      fileDownload(res.data, unirarq)

    }).catch(err=>{
      console.log(err)
    })
}

const getColabById = (id: string) => {
  const logado = cookie['ionic-user']
    axios.get(`/api/colab/funcionario/${logado.id}`, { headers: CriaHeader() }).then(res => {
      console.log(res);
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
      setRua(res.data.enderecos?.[0]?.rua);
      setEstado(res.data.enderecos?.[0]?.estado);
      setCidade(res.data.enderecos?.[0]?.cidade);
      setBairro(res.data.enderecos?.[0]?.bairro);
      setCep(res.data.enderecos?.[0]?.cep);
      setComplemento(res.data.enderecos?.[0]?.complemento);
      setRegiao(res.data.enderecos?.[0]?.regiao);
      setFormacao(res.data.DadosAcademicos?.[0]?.formacao);
      setIdiomas(res.data.DadosAcademicos?.[0]?.Idiomas);
      setCurso(res.data.DadosAcademicos?.[0]?.cursos);
    })
  }

React.useEffect(()=>{    
    document.title='documentos-colab'
    getColabById(id)    
    ListDownload(id)    
    var el = document.querySelector('#tabs-swipe-demo')
    var instance = M.Tabs.init(el, Option);
},[])

return(
<div>

    <div className="geralContainer">
        <span className="titulo">Documentos</span>
    </div>
    <div className="Pesquisa">
    </div>

    <div className="container">
        <ul id="tabs-swipe-demo" className="tabs cabecalho">
          <li className="tab col s4"><a href="#test-swipe-2">Documentos Pessoais</a></li>
          <li className="tab col s4"><a href="#test-swipe-1">Documentos Empresa</a></li>
          <li className="tab col s4"><a href="#test-swipe-3">Contrato</a></li>
        </ul>
    

        {/* -----------------------------------DOCUMENTOS PESSOAIS------------------------------------------- */}

        <div id="test-swipe-2" className="col s12 ">
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

        {/* -----------------------------------DOCUMENTOS EMPRESA------------------------------------------- */}

        <div id="test-swipe-1" className="col s12 ">
            <br></br>
            <br></br>
        </div>

        {/* -----------------------------------CONTRATO------------------------------------------- */}    

        <div id="test-swipe-3" className="col s12 ">
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

    </div>


</div>    
)




}
export default DocColab
