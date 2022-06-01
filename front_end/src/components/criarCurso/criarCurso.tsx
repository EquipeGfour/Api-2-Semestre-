import React, { useState } from "react"
import "./criarCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

const CriarCurso: React.FC = (props) => {
    const [cookie,setCookie]=useCookies(['ionic-user'])
    const [nomearquivoaula,setNomeArquivoAula] = useState('')
    const [nomearquivovideo,setNomeArquivoVideo] = useState('')
    const [aula,setAula] = useState<File>()
    const [video,setVideo] = useState<File>()

    const enviaVideo = () =>{        
        const form = new FormData();  
        form.append('video', video);

        axios.post(`/api/upload/uploadVideo/1`, form, {headers:CriaHeader()}).then(res=>{
            if (nomearquivovideo)M.toast({html:`Arquivo ${nomearquivovideo} carregado com sucesso!`, classes:"modal1 rounded"})   
            if (nomearquivovideo === null )
            M.toast({html:'Nenhum Arquivo foi carregado, Carregue pelo menos um item!', classes:'modalerro rounded'})
            console.log(form)
            DelArquivoUpload()
          }).catch(erro=>{
            console.error('Erro', erro.response)
        })
    }

    const DelArquivoUpload = () =>{
        setVideo(null)
        setNomeArquivoVideo(null)
    }

    const OnFileChangeVideo = e=>{  
        setVideo(e.target.files[0]) 
        setNomeArquivoVideo(e.target.files[0].name)  
    }
      

    React.useEffect(() => {
        document.title = 'Cria-Curso'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
    }, [])

    return (
        <div className="containerCriaCurso">
            <div className="dadosContainer cursos">
                <span>Criar Aulas</span>
            </div>

            <div className="tituloArquivos">
                <h5>Adicionar Arquivos</h5>
            </div>

            <div className="arquivo">
            <table className="responsive-table centered tabUp1">
                <thead>
                    <tr className="linha">
                        <th>Tipo</th>
                        <th className="espacoCampo">Arquivo</th>
                        <th></th>               
                    </tr>
                </thead>
                <tbody>
                    <tr>       
                        <td>Material de Apoio</td>
                        <td><span><button className="excluir"></button></span></td>             
                        <td>
                        <div className="file-field input-field btn">
                        <span>Carregar<input type="file"/></span>                        
                        </div>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                <tr>       
                    <td>Vídeos</td>
                    <td><span>{nomearquivovideo}{video &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons delUp">clear</i></button>}</span></td>             
                    <td>
                    <div className="file-field input-field btn">
                    <span>Carregar<input type="file" onChange={OnFileChangeVideo}/></span>                    
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className="listaCurso">
                <table className="responsive-table tabUp2">
                    <thead>
                        <tr>
                            <th>Arquivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arquivo 1</td>
                        </tr>
                        <tr>
                            <td>Arquivo 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="listaCurso">
                <table className="responsive-table tabUp2">
                    <thead>
                        <tr>
                            <th>Vídeos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vídeo 1</td>
                        </tr>
                        <tr>
                            <td>Vídeo 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="botaoFinal">
            <a className="waves-effect waves-light btn-large  btnAzulUpload1" onClick={enviaVideo}>Criar Curso</a>
            </div>
        </div>
    )
}
export default CriarCurso




