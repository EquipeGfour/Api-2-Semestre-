<p align="center">
<h1 align="center"> FATEC Profº Jessen Vidal, SJC - 2º Semestre DSM </h1>

<h2> :briefcase: Objetivo</h2>
O nosso objetivo é apoiar a área de Recursos Humanos e Departamento Pessoal a desenvolver uma plataforma para controle de todos os talentos da empresa (pessoas). Após a aprovação no processo seletivo se faz necessário o cadastro do colaborador (CLT ou PJ) em um sistema que traga informações sobre sua contratação, controle de documentação, dados, entre outros dados. Temos que levar em consideração da LGPD para que o acesso seja restrito.
<br>

 
<h2> 📑 Backlog do produto</h2>

<h4> 🛠️ Requisitos Funcionais</h4>

RF ID# | Sprint | Requisitos | Prioridade| Status|
:--------- | :------: | :-------: | :-------: | :------: |
1 |1|Cadastros de colaboradores e administradores|ALTA|COMPLETO
2 |2|Perfis diferentes para os usuarios|ALTA|COMPLETO
3 |2|Charts com os organogramas em  diversos níveis e com inclusões, exclusões e adaptações|ALTA|COMPLETO
4 |2|Dossiê gerado em PDF por colaborador para consulta do administrador e gestor|ALTA|COMPLETO
5 |3|Cadastros de Trilha de Aprendizado e Status de Realização|ALTA|ANDAMENTO
6 |3|Ajustes e validações|ALTA|ANDAMENTO
7 |3|Desligamentos de colaboradores|MÉDIA|ANDAMENTO
8 |3|Recuperar e redefinir senha|MÉDIA|ANDAMENTO
<br>
<h4> 🛠️ Requisitos não Funcionais</h4>

RF ID# | Sprint | Requisitos | Prioridade| Status|
:--------- | :------: | :-------: | :-------: | :------: |
9 |1|Conexão com Banco de dados|ALTA|COMPLETO
10 |1|NodeJs, Java Script, Type Script e React|ALTA|COMPLETO
11 |2|Repositório para documentos dos colaboradores|ALTA|COMPLETO
12 |2|Manual do usuário para navegação.|MÉDIA|COMPLETO
13 |3|Desenho da arquitetura da solução|MÉDIA|ANDAMENTO
14 |3|Documentação de testes e funcionais|MÉDIA|ANDAMENTO
15 |3|Repositório de documentos da empresa|MÉDIA|ANDAMENTO
16 |3|Implementação da Lei LGPD|MÉDIA|ANDAMENTO
<br>

### Timeline Do Produto

![WhatsApp Image 2022-05-27 at 13 16 37 (1)](https://user-images.githubusercontent.com/8519765/170739328-46312b34-708a-4a37-9076-1c94cdd39788.jpeg)
 

<br>

### :card_file_box: Estruturação Das Pastas.


<br>

```bash
├───docs
│   ├───sprint1
│   │   ├───backlog
│   │   ├───burndown
│   │   ├───database
│   │   ├───manual
│   │   ├───user stories
│   │   └───wireframe
│   ├───sprint2
│   │   ├───backlog
│   │   ├───burndown
│   │   ├───database
│   │   ├───manual
│   │   ├───user stories
│   │   └───wireframe
│   ├───sprint3
│   │   ├───backlog
│   │   ├───burndown
│   │   ├───database
│   │   ├───manual
│   │   ├───user stories
│   │   └───wireframe
│   └───total
│       ├───backlog
│       └───user stories
├──backend
│	├───config
│	├───controllers
│	├───functions
│	├───models
│	├───routes
│	├───service
│	└───uploads
├──front_end
│	├───public
│	├───src
│	│      ├───components
│	│      │	    ├───Administrador
│	│      │	    ├───dados_empresa
│	│      │	    ├───dados_pessoais
│	│      │	    ├───desligados
│	│      │	    ├───detalheDepartamento
│	│      │	    ├───detalheFunc
│	│      │	    ├───esqueceu-senha
│	│      │	    ├───geralDepartamento
│	│      │	    ├───geralFunc
│	│      │	    ├───Home
│	│      │	    ├───img
│	│      │	    ├───login
│	│      │	    ├───NavBar
│	│      │	    ├───Novo_Cargo
│	│      │	    ├───Novo_Departamento
│	│      │	    ├───orgchart
│	│      │	    ├───PreRegistro
│	│      │	    ├───Redefinir-Senha
│	│      │	    ├───trilha
│	│      │	    └───Upload
│	│      └───functions
│	└───static
├──banco de dados
└──imagens_gerais
	└───gifs
```
<br>

<h2>:calendar: Cronograma</h2>

 :heavy_check_mark: KICK OFF - 14/03 

 :heavy_check_mark: <a href="https://github.com/EquipeGfour/Api-2-Semestre-/releases/tag/1.0">SPRINT 1</a> - 25/03 à 14/04

 :heavy_check_mark: <a href="https://github.com/EquipeGfour/Api-2-Semestre-/releases/tag/2.0">SPRINT 2</a> - 25/04 à 15/05

- [x] SPRINT 3 - 16/05 à 05/06
<br><br>

<h2>⛏️ Como rodar a aplicação</h2>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:<br>
```Git, Node.js e um editor de código-fonte (recomendado VSCode), Sistema de gerenciar banco de dados(MySql).```

### 🎲 Rodando o Front End

```bash
# Clone este repositório
$ git clone https://github.com/EquipeGfour/Api-2-Semestre-.git

# Configurações de ambiente
$ Após clonar o repositório entre no arquivo chamado .env.exemplo e copie as informações contidas nele.
$ Crie um novo arquivo na raiz do diretório do back end chamado .env e cole as informações, preencha os campos vazios com suas configurações.

# Rodar o script do banco de dados
$ Acesse o arquivo sql_ionic.sql no diretório do banco de dados e copie todo script e cole no seu banco de dados.

# Acesse a pasta do projeto no terminal do editor de código-fonte:
$ cd .\Api-2-Semestre-\

# Vá para a pasta server
$ cd .\front_end\

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start
```


### 🎲 Rodando o Back End

```bash
# Acesse a pasta do projeto no terminal do editor de código-fonte:
$ cd .\Api-2-Semestre-\

# Vá para a pasta server
$ cd .\backend\

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

```


### 🎲 Acesso do administrador
```
Conta Admin
$ Email =  admin@ionic.com
$ Senha =  adminionic

Conta Ceo
$ Email = ceo@ionic.com
$ Senha = ceoionic
```

<br>

<h2>:wrench: Tecnologias Utilizadas</h2>


![Design sem nome](https://user-images.githubusercontent.com/8519765/169674652-41f4ebdf-1083-4b17-aa39-410be76d7bb2.png)


<h2> 🖥️ Deploy Heroku</h2>

 - O Sistema Esta Hospedado na Plataforma Heroku.<br>
 - Quer saber mais sobre a plataforma de hospedagem clique em saber mais abaixo.<br>
 - <a href="https://imaginedone.com.br/blog/o-que-e-o-heroku/">:link: Saber mais</a> 	
 <h4>📌Clique no link para Acessar o Sistema</h4>	
<a href="https://api2semestreionic.herokuapp.com/">:link: Link</a> <br>

	
<h2>:bulb: Metodologia Utilizada</h2>

* **Metodologia Ágil:** Framework [Scrum](https://blog.contaazul.com/metodologia-scrum#:~:text=a%20planilha%20agora-,O%20que%20%C3%A9%20a%20metodologia%20Scrum,desenvolvedores%20de%20softwares%20e%20sistemas.)<br><br>



### 🎯 Entregas

Sprint ID | Data | Tag | Vídeo | Status
----------|------|-----|-------|--------
#1 | 25.03.22 - 14.04.22 | <a href="https://github.com/EquipeGfour/Api-2-Semestre-/releases/tag/1.0">Aqui</a> | <a href="https://drive.google.com/file/d/1uCD5gcSgUYE3DYMdf70ZzBRJimSCmw0R/view">Link</a> | ✔️
#2 | 25.04.22 - 15.05.22 | <a href="https://github.com/EquipeGfour/Api-2-Semestre-/releases/tag/2.0">Aqui</a> | <a href="https://drive.google.com/file/d/1Byk6AviwSG9bucdXp7VVYlbTs07RJECw/view?usp=sharing">Link</a> | ✔️
#3 | 16.05.22 - 05.06.22 | 🛑 | 🛑 | 🛑


<div id='equipe'>
    <h3>Equipe Gfour</h3>
    

Integrantes da Equipe | Função | Linkedin | Github| Avatar|
:--------- | :------: | :-------: | :-------: | :------: |
Natália Bessa de Moura | PO | [Linkedin](https://www.linkedin.com/in/natalia-bessa-59b671220/) | [Github](https://github.com/lirabessa)|<img src = "imagens_gerais/natalia.jpg" width="60" height="60">|     
Rodrigo Ribeiro dos Santos | SM | [Linkedin](https://www.linkedin.com/in/rodrigo-ribeiro-5008211b8/) | [Github](https://github.com/rodrigoribeiro027)|<img src = "imagens_gerais/rodrigo1.jpg" width="60" height="60">|
Rafael Peressoni Waltrick | DT | [Linkedin](https://www.linkedin.com/in/rafael-p-waltrick-7211b4221) |  [Github](https://github.com/rafawaltrick)|<img src = "imagens_gerais/rafa(1).jpg" width="60" height="60">|
Nicolas Lima de Holanda Galindo | DT | [Linkedin](https://www.linkedin.com/in/nicolas-lima-2a75a3220/) | [Github](https://github.com/Nicolas734)|<img src = "imagens_gerais/nicolas11.jpg" width="60" height="60">| 
Raniel Francisco Santos de Paula | DT |[Linkedin](https://www.linkedin.com/in/raniel-santos-204878222/)| [Github](https://github.com/Raniel-Santos)|<img src = "imagens_gerais/raniel.png" width="60" height="60">|
Gustavo Borges Lima | DT |[Linkedin](https://www.linkedin.com)| [Github](https://github.com/Miojoguu)|<img src = "imagens_gerais/gustavo.jpg" width="60" height="60">|
<br>

   
`PO - Product Owner`<br>
`SM - Scrum Master`<br>
`DT - Developers Team`  

</div>
	



 <h1 align="center"> <img src = "imagens_gerais/Fatec.jpg" height="90" /></h1>
 
 <h5 align="center"> <img src = "imagens_gerais/faTec.png" width="20" height="20" /> Projeto Integrador 2022 - Fatec São José dos Campos </h5>
