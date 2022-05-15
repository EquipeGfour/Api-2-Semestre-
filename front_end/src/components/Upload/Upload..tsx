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

// const [arquivo,setArquivo]= useState()
const [nomearquivodoc,setNomeArquivoDoc] = useState('')
const [nomearquivocert,setNomeArquivoCert] = useState('')
const [nomearquivocomprov,setNomeArquivoComprov] = useState('')
const [documentos,setDocumentos] = useState<File>()
const [certificados,setCertificados] = useState<File>()
const [comprovantes,setComprovantes] = useState<File>() 

const [cookie,setCookie]=useCookies(['ionic-user'])


const EnviaDados = () =>{
  const logado = cookie['ionic-user']
  const form = new FormData();  
  form.append('documento', documentos);
  form.append('certificado', certificados)
  form.append('comprovante', comprovantes)
  

  axios.post(`/api/upload/enviar/${logado.id}`, form, {headers:CriaHeader()}).then(res=>{
    if (nomearquivodoc)M.toast({html:`Arquivo ${nomearquivodoc} carregado com sucesso!`, classes:"modal1 rounded"})
    if (nomearquivocert)M.toast({html:`Arquivo ${nomearquivocert} carregado com sucesso!`, classes:"modal1 rounded"})  
    if (nomearquivocomprov)M.toast({html:`Arquivo ${nomearquivocomprov} carregado com sucesso!`, classes:"modal1 rounded"})
    
    if(nomearquivodoc === null && nomearquivocert === null &&  nomearquivocomprov === null)
    M.toast({html:'Nenhum Arquivo foi carregado, Carregue pelo menos um item!', classes:'modalerro rounded'})
    console.log(form)
    DelArquivoUpload()

  }).catch(erro=>{
    console.error('Erro', erro.response)
})
}

const DelArquivoUpload = () =>{
  setNomeArquivoDoc(null)
  setNomeArquivoComprov(null)
  setNomeArquivoCert(null)
  setDocumentos(null)
  setComprovantes(null)
  setCertificados(null)  
}

const OnFileChangeDoc = e=>{  
  setDocumentos(e.target.files[0]) 
  setNomeArquivoDoc(e.target.files[0].name)  
}

const OnFileChangeCert = e=>{ 
  setCertificados(e.target.files[0])
  setNomeArquivoCert(e.target.files[0].name)
}

const OnFileChangeComprov = e=>{ 
  setComprovantes(e.target.files[0])
  setNomeArquivoComprov(e.target.files[0].name)
}

  React.useEffect(()=>{
    document.title='Upload'
},[])

  return (
    <div className="uploadContainer">
      <h1>Uploads</h1>

      <div className="row">
        <div className="">
          
          <table className="responsive-table centered tabUp">
            <thead>
              <tr className="">
                <th>Tipo</th>
                <th>Arquivo</th>
                <th></th>               
              </tr>
            </thead>
            <tbody>
              <tr>       
                <td>Documentos</td>
                <td><span>{nomearquivodoc}{documentos &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons delUp">clear</i></button>}</span></td>             
                <td>
                <div className="file-field input-field btn">
                <span>Carregar<input type="file" onChange={OnFileChangeDoc}/></span>
                
                </div>
                </td>
              </tr>

              <tr>       
                <td>Certificados</td>
                <td><span>{nomearquivocert}{certificados &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons delUp">clear</i></button>}</span></td>       
                <td>
                <div className="file-field input-field btn">
                <span>Carregar<input type="file" onChange={OnFileChangeCert}/></span>
                </div>
                </td>
              </tr>

              <tr>       
                <td>Comprovante de Endereços e Outros</td>
                <td><span>{nomearquivocomprov}{comprovantes &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons delUp">clear</i></button>}</span></td>           
                <td>
                <div className="file-field input-field btn">
                <span>Carregar<input type="file" onChange={OnFileChangeComprov}/></span>
                </div>
                </td>
              </tr>         
              {/* {arquivo &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons">clear</i></button>} */}
                
                
                
            </tbody> 
          </table>           
         
          
            
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
