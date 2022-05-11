import React, { useState } from "react";
import "./styleup.css";
import { MdCloudUpload } from "react-icons/md";
import { TextInput } from "react-materialize";
import axios from "../../functions/axios";
import { useCookies } from "react-cookie";
import { CriaHeader } from '../../functions';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

const Upload: React.FC=()=> {

const [arquivo,setArquivo]= useState<File>()
const [nomearquivo,setNomeArquivo] = useState('')
const [cookie,setCookie]=useCookies(['ionic-user'])


const EnviaDados = () =>{
  const logado = cookie['ionic-user']
  const form = new FormData();
  form.append('arquivo',arquivo);

  axios.post(`/api/upload/enviar/${logado.id}`, form, {headers:CriaHeader()}).then(res=>{
    M.toast({html:`Arquivo ${nomearquivo} carregado com sucesso!`, classes:"modal1 rounded"})
    DelArquivoUpload()

  }).catch(erro=>{
    console.error('Erro', erro.response)
})
}

const DelArquivoUpload = () =>{
  setNomeArquivo('')
  setArquivo(null)
}

const OnFileChange = e=>{
  setArquivo(e.target.files[0])
  setNomeArquivo(e.target.files[0].name)
  
}

  React.useEffect(()=>{
    document.title='Upload'
},[])

  return (
    <div className="uploadContainer">
      <h1>Uploads</h1>

      <div className="row">
        <div className="file-field input-field">
          <div className=" waves-effect waves-light  btnCarregar">
            <span>
              <MdCloudUpload className="Nuvem" />
              Clique para carregar
            </span>
            
            <input type="file" onChange={OnFileChange} />
          </div>
            
        </div>
          <div className="row">
            <span>{nomearquivo}</span>
            {arquivo &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons">clear</i></button>}
          </div>
        
        <div className="row checkBox">
          <p>
            <label>
              <input type="checkbox"  className="filled-in" />
              <span>Eu aceito os Termos de Uso</span>
            </label>
          </p>

          <p>
            <label>
              <input type="checkbox"  className="filled-in" />
              <span className="box2">Eu aceito a Política de Privacidade</span>
            </label>
          </p>
        </div>
      </div>

      <a className="waves-effect waves-light btn-large btnAzulUpload" onClick={EnviaDados}>
        Carregar
      </a>
      <Link to= '/'>
        <a className="waves-effect waves-light btn-large btnAzulUpload">
          Finalizar Cadastro
        </a>
      </Link>
    </div>
  );
}

export default Upload;
