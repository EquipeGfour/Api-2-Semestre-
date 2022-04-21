import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

//Import de meus componentes (páginas)

import NavBar from './components/NavBar/NavBar';
import DadosPessoais from './components/dados_pessoais/dadosPessoais';
import Upload from './components/Upload/Upload';
import Login from './components/login/login';
import Administrador from './components/Administrador/Administrador.js'
import GeralFunc from './components/geralFunc/geralFunc';
import PreRegistro from "./components/PreRegistro/PreRegistro"
import Home from "./components/Home/home"
import DadosEmpresa from "./components/dados_empresa/dadosEmpresa"
import GeralDep from "./components/geralDepartamento/geralDep"
import NovoDepartamento from "./components/Novo_Departamento/NovoDepartamento"
import NovoCargo from "./components/Novo_Cargo/NovoCargo"
import DetalheDep from "./components/detalheDepartamento/detalheDep"

type state = {
  tela: string
}

class App extends Component<{},state> {
  constructor(props){
    super(props)
    this.state = {
      tela: ''
    }

    this.selecionarTela = this.selecionarTela.bind(this)
  }

  selecionarTela(opcao:string, evento){
    console.log('ta clicando....');
    
    evento.preventDefault()
    this.setState({
      tela:opcao
    })
  }

render(){


  return(
    <div>
      


      <BrowserRouter>        
        <NavBar>
        </NavBar>
        <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='dados-pessoais' element={<DadosPessoais/>}/>
          <Route path='dados-empresa' element={<DadosEmpresa/>}/>
          <Route path="admin-dados" element={<Administrador/>}/>
          <Route path='geral-funcionarios' element={<GeralFunc/>}/>
          <Route path='home-admin' element={<Home/>}/>
          <Route path='upload' element={<Upload/>}/>
          <Route path='pre-registro' element={<PreRegistro/>}/>
          <Route path='geral-departamentos' element={<GeralDep/>}/>
          <Route path='novo-departamento' element={<NovoDepartamento/>}/>
          <Route path='novo-cargo' element={<NovoCargo/>}/>
          <Route path='detalhe-departamento/:id' element={<DetalheDep/>}/>
        </Routes>      
      </BrowserRouter>
      
    </div>
  )
}
}

export default App;
