import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Import de meus componentes (páginas)
import NavBar from './components/NavBar/NavBar';
import DadosPessoais from './components/dados_pessoais/dadosPessoais';
import Upload from './components/Upload/Upload.';
import Login from './components/login/login';
import GeralFunc from './components/geralFunc/geralFunc';
import PreRegistro from "./components/PreRegistro/PreRegistro"
import Home from "./components/Home/home"
import DadosEmpresa from "./components/dados_empresa/dadosEmpresa"
import GeralDep from "./components/geralDepartamento/geralDep"
import NovoDepartamento from "./components/Novo_Departamento/NovoDepartamento"
import NovoCargo from "./components/Novo_Cargo/NovoCargo"
import DetalheDep from "./components/detalheDepartamento/detalheDep"
import DetalheFunc from './components/detalheFunc/detalheFunc';
import Orgchart from './components/orgchart/organograma'
import Trilha from './components/trilha/trilha'
import Desligados from './components/desligados/desligados';



import Redefinir from './components/Redefinir-senha/redefinir-senha';
import Esqueceu from './components/esqueceu-senha/esqueceu-senha';
import HomeColab from './components/homeColaborador/homeColab'
import TrilhaColaborador from './components/trilha_Colaborador/trilha_Colaborador';
import DocColab from './components/DocumentosColab/documentosColab'
import DetalheCnpj from './components/detalheCnpj/detalheCnpj';
import TrilhaAdd from './components/trilha_adicionar/trilha_add';
import CriarCurso from './components/criarCurso/criarCurso';
import MeuPerfil from './components/meuPerfil/meuPerfil'
import MenuCurso from './components/menuCurso/menuCurso'
import AssistirCurso from './components/assistirCurso/assistirCurso'
import CriarTrilha from './components/criarTrilha/criarTrilha'
import VincularCurso from './components/vincularCurso/vincularCurso';
import GeralCursos from './components/geralCursos/geralCursos'
import RedefinirDados from './components/redefinirDados/redefinirDados';
import CriarAula from './components/criarAula/criarAula';
import RemoveTrilha from './components/Remover da Trilha/removeTrilha';
import Empresa from './components/Empresa/empresa';
import RelatorioDesligamento from './components/RelatorioDesligamento/relatorioDesligamento';
import CriaEmpresa from './components/CriarEmpresa/cria_empresa';
import MenuCursoColab from './components/menuCursoColab/menuCursoColab'
import GeralCursosColab from './components/geralCursosColab/geralCursosColab'
import GeralFuncPJ from './components/geralFuncPJ/geralFuncPJ'
import UploadColab from './components/Upload colab/UploadColab'

type state = {
  tela: string
}

class App extends Component<{}, state> {
  constructor(props) {
    super(props)
    this.state = {
      tela: ''
    }
    this.selecionarTela = this.selecionarTela.bind(this)
  }

  selecionarTela(opcao: string, evento) {
    console.log('ta clicando....');
    evento.preventDefault()
    this.setState({
      tela: opcao
    })
  }

render(){
  return(
    <div>     
      <BrowserRouter>        
        <NavBar>
        </NavBar>
        <Routes >
          <Route path='/' element={<Login/>}/>
          <Route path='dados-pessoais' element={<DadosPessoais/>}/>
          <Route path='dados-empresa' element={<DadosEmpresa/>}/>
          <Route path='geral-funcionarios' element={<GeralFunc/>}/>
          <Route path='home-admin' element={<Home/>}/>
          <Route path='upload' element={<Upload/>}/>
          <Route path='upload-colab' element={<UploadColab/>}/>
          <Route path='pre-registro' element={<PreRegistro/>}/>
          <Route path='geral-departamentos' element={<GeralDep/>}/>
          <Route path='novo-departamento' element={<NovoDepartamento/>}/>
          <Route path='novo-cargo/:id' element={<NovoCargo/>}/>
          <Route path='detalhe-departamento/:id' element={<DetalheDep/>}/>
          <Route path='detalhe-funcionario/:id' element={<DetalheFunc/>}/>
          <Route path='organograma' element={<Orgchart/>}/>
          <Route path='trilha' element={<Trilha/>}/>
          <Route path='redefinir-senha' element={<Redefinir/>}/>
          <Route path='desligados' element={<Desligados/>}/>
          <Route path='esqueceu' element={<Esqueceu/>}/>
          <Route path='home-colaborador' element={<HomeColab/>}/>
          <Route path='documentos-colab' element={<DocColab/>}/>
          <Route path='detalhe-cnpj/:id' element={<DetalheCnpj/>}/>
          <Route path='criar-trilha' element={<CriarTrilha/>}/>
          <Route path='trilha-adicionar/:id' element={<TrilhaAdd/>}/>
          <Route path='criar-curso/:id' element={<CriarCurso/>}/>
          <Route path='home-colaborador/meu-perfil' element = {<MeuPerfil/>}/>
          <Route path='menu-curso/:id' element = {<MenuCurso/>}/>
          <Route path='menu-curso-colab/:id' element = {<MenuCursoColab/>}/>
          <Route path='assistir-curso/:id' element = {<AssistirCurso/>}/>
          <Route path='vincular-curso/:id' element={<VincularCurso />} />
          <Route path='geral-cursos/:id' element={<GeralCursos />} />
          <Route path='geral-cursos-colab/:id' element={<GeralCursosColab />} />
          <Route path='redefinir-dados/' element={<RedefinirDados/>}/>
          <Route path='criar-aula/:id' element={<CriarAula/>}/>
          <Route path='remove-trilha/:id' element={<RemoveTrilha/>}/>
          <Route path='empresa' element={<Empresa/>}/>
          <Route path='relatorioDesligamento' element={<RelatorioDesligamento/>}/>
          <Route path='cria-empresa' element={<CriaEmpresa/>}/>
          <Route path='trilha-colaborador/:id' element={<TrilhaColaborador/>}/>
          <Route path='geral-funcionariosPJ' element ={<GeralFuncPJ/>}/>
        </Routes>      
      </BrowserRouter>      
    </div>
  )
}
}

export default App;
