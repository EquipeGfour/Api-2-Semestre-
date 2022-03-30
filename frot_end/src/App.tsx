import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DadosPessoais from './components/dados_pessoais/dadosPessoais';


function App() {
  return(
    <div>
      <NavBar/>
      <DadosPessoais/>
      
    </div>
  )
  }
export default App;
