import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DadosPessoais from './components/dados_pessoais/dadosPessoais';
import PrimeiroAcesso from './components/PrimeiroAcesso/PrimeiroAcesso';
import Upload from './components/Upload/Upload';
import Login from './components/login/login';

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
  let tela  = <Login funcao = {this.selecionarTela}/>
  if(this.state.tela === 'dadosPessoais'){
    tela = <DadosPessoais/>
  }

  return(
    <div>
      <NavBar/>
      {tela}
      
    </div>
  )
}
}

export default App;
