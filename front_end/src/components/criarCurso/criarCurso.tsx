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
    const [tituloaula,setTituloAula] = useState('')
    const [descricaoaula,setDescricaoAula] = useState('')
    const [arquivos,setArquivos] = useState([])
    const{id}=useParams()

    const enviaArquivos = () => {        
        const form = new FormData();  
        form.append('video', video);
        form.append('material', aula)

        axios.post(`/api/upload/uploadMateriais/${id}`,form, {headers:CriaHeader()}).then(res=>{
            if (nomearquivovideo)M.toast({html:`Arquivo ${nomearquivovideo} carregado com sucesso!`, classes:"modal1 rounded"})
            if (nomearquivoaula)M.toast({html:`Arquivo ${nomearquivoaula} carregado com sucesso!`, classes:"modal1 rounded"})      
            if (nomearquivoaula === null || nomearquivovideo === null )
            M.toast({html:'Nenhum Arquivo foi carregado, Carregue pelo menos um item!', classes:'modalerro rounded'})
            console.log(form)
            DelArquivoUpload()
          }).catch(erro=>{
            console.error('Erro', erro.response)
        })
    }

    const ListAulas = (id) =>{
        axios.get(`/api/aula/listarAulas/${id}`,{headers: CriaHeader()}).then(res=>{
            console.log(res)
            setArquivos(res.data)
          }).catch(err=>{
            console.log(err)
          })
          
    }

    const DelArquivoUpload = () =>{
        setVideo(null)
        setNomeArquivoVideo(null)
        setAula(null)
        setNomeArquivoAula(null)
        setTituloAula(null)
        setDescricaoAula(null)
    }

    const OnFileChangeVideo = e=>{  
        setVideo(e.target.files[0]) 
        setNomeArquivoVideo(e.target.files[0].name)  
    }

    const OnFileChangeAula = e=>{  
        setAula(e.target.files[0]) 
        setNomeArquivoAula(e.target.files[0].name)  
    }
      

    React.useEffect(() => {
        document.title = 'Cria-Curso'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
        ListAulas(id)
    }, [])

    return (
        <div className="containerCriaCurso">
            <div className="dadosContainer cursos">
                <span>Upload de Arquivos</span>
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
                        <td>Aulas</td>
                        <td><span>{nomearquivoaula}{aula &&<button className="excluir" onClick={DelArquivoUpload}><i className="material-icons delUp">clear</i></button>}</span></td>             
                        <td>
                        <div className="file-field input-field btn">
                        <span>Selecione<input type="file" onChange={OnFileChangeAula}/></span>                        
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
                    <span>Selecione<input type="file" onChange={OnFileChangeVideo}/></span>                    
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="botaoFinal">
                <a className= "btn-large  btnAzulUpload1" onClick={enviaArquivos}>Carregar</a>
                <Link to={'/trilha'}>
                <a className="waves-effect waves-light btn-large  btnAzulUpload1">Finalizar</a>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default CriarCurso




