import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DadosPessoais from './components/dados_pessoais/dadosPessoais';
import Administrador from './components/Administrador/Administrador';
import PrimeiroAcesso from './components/PrimeiroAcesso/PrimeiroAcesso';
import Upload from './components/Upload/Upload';


function App() {
  return(
    <div>
      <NavBar/>
      <Upload />
      
    </div>
  )
  }
export default App;
