
DROP DATABASE IF EXISTS ionic;

CREATE DATABASE ionic;

use ionic;

-- tables
-- Table: Acessos
CREATE TABLE Acessos (
    ID int NOT NULL AUTO_INCREMENT,
    Cargos_ID int ,
    nivel_acesso int ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Acessos_pk PRIMARY KEY (ID)
);

-- Table: Cargos
CREATE TABLE Cargos (
    ID int NOT NULL AUTO_INCREMENT,
    Departamento_ID int ,
    cargo varchar(300) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Cargos_pk PRIMARY KEY (ID)
);

-- Table: Colaboradors
CREATE TABLE Colaboradors (
    ID int NOT NULL AUTO_INCREMENT,
    Cargos_ID int ,
    nome varchar(300) ,
    email varchar(300) ,
    senha varchar(300) ,
    naturalidade varchar(200),
    nacionalidade varchar(200),
    estado_civil varchar(200),
    genero varchar(200),
    raca varchar(100),
    ddd varchar(300) ,
    numero varchar(300) ,
    data_nascimento date ,
    pesquisa_desligamento varchar(300),
    status varchar(200) ,
    dominio varchar(300) ,
    tipo_desligamento varchar(300),
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Colaboradors_pk PRIMARY KEY (ID)
);

-- Table: Contratos
CREATE TABLE Contratos (
    ID int NOT NULL AUTO_INCREMENT,
    Colaborador_ID int ,
    faixa_salarial int ,
    auxilio_creche int ,
    vale_refeicao int ,
    distrato varchar(45) ,
    contrato_trabalho varchar(200) ,
    codigo_conduta_etica varchar(40) ,
    vale_transporte int ,
    base varchar(300) ,
    data_Admissao date ,
    plano_saude varchar(40) ,
    createdAt date default now() NOT NULL,
    updatedAt int ,
    data_desligamento date ,
    tipo_arquivo_contrato varchar(200) ,
    CONSTRAINT Contrato_pk PRIMARY KEY (ID)
);

-- Table: Dados_Academicos
CREATE TABLE Dados_Academicos (
    ID int NOT NULL AUTO_INCREMENT,
    Colaborador_ID int ,
    formacao varchar(200) ,
    cursos varchar(200) ,
    termo_PI varchar(200) ,
    linguas varchar(200) ,
    tipo_arquivo_academicos varchar(200) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Dados_Academicos_pk PRIMARY KEY (ID)
);

-- Table: Departamentos
CREATE TABLE Departamentos (
    ID int NOT NULL AUTO_INCREMENT,
    area varchar(300) ,
    head varchar(300) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Departamentos_pk PRIMARY KEY (ID)
);

-- Table: Enderecos
CREATE TABLE Enderecos (
    ID int NOT NULL AUTO_INCREMENT,
    estado varchar(200) ,
    regiao varchar(300) ,
    cep int ,
    cidade varchar(300) ,
    bairro varchar(300) ,
    complemento varchar(300) ,
    Colaborador_ID int ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Enderecos_pk PRIMARY KEY (ID)
);

-- Table: Grade_Cursos
CREATE TABLE Grade_Cursos (
    ID int NOT NULL AUTO_INCREMENT,
    Trilha_Aprendizados_ID int ,
    nome_curso varchar(200) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Grade_Cursos_pk PRIMARY KEY (ID)
);

-- Table: Pessoa_Fisicas
CREATE TABLE Pessoa_Fisicas (
    Colaborador_ID int NOT NULL,
    cpf int,
	tipo_arquivo_pessoa_fisica varchar(200) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Pessoa_Fisicas_pk PRIMARY KEY (Colaborador_ID)
);

-- Table: Pessoa_Juridicas
CREATE TABLE Pessoa_Juridicas (
    Colaborador_ID int NOT NULL,
    cnpj int ,
    empresa_contratada varchar(300) ,
    tempo_formalizacao varchar(300) ,
    natureza_juridica varchar(300) ,
    data_fundacao varchar(300) ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Pessoa_Juridicas_pk PRIMARY KEY (Colaborador_ID)
);

-- Table: Trilha_Aprendizados
CREATE TABLE Trilha_Aprendizados (
    ID int NOT NULL AUTO_INCREMENT,
    Pessoa_Fisicas_Colaborador_ID int ,
    status_curso varchar(200) ,
    data_inicio date ,
    data_fim date ,
    createdAt date default now() NOT NULL,
    updatedAt date ,
    CONSTRAINT Trilha_Aprendizados_pk PRIMARY KEY (ID)
);

-- foreign keys
-- Reference: Acesso_Cargo (table: Acessos)
ALTER TABLE Acessos ADD CONSTRAINT Acesso_Cargo FOREIGN KEY Acesso_Cargo (Cargos_ID)
    REFERENCES Cargos (ID);

-- Reference: Cargo_Colaborador (table: Cargos)
ALTER TABLE Colaboradors ADD CONSTRAINT Colaboradors_Cargo FOREIGN KEY Colaboradors_Cargo (Cargos_ID)
    REFERENCES Cargos (ID);
    
ALTER TABLE Cargos ADD CONSTRAINT Departamento_Cargo FOREIGN KEY Departamento_Cargo (Departamento_ID)
    REFERENCES Departamentos (ID);

-- Reference: Contrato_Colaborador (table: Contratos)
ALTER TABLE Contratos ADD CONSTRAINT Contrato_Colaborador FOREIGN KEY Contrato_Colaborador (Colaborador_ID)
    REFERENCES Colaboradors (ID);

-- Reference: Dados_Academicos_Colaborador (table: Dados_Academicos)
ALTER TABLE Dados_Academicos ADD CONSTRAINT Dados_Academicos_Colaborador FOREIGN KEY Dados_Academicos_Colaborador (Colaborador_ID)
    REFERENCES Colaboradors (ID);

-- Reference: Endereco_Colaborador (table: Colaboradors)
ALTER TABLE Enderecos ADD CONSTRAINT Endereco_Colaborador FOREIGN KEY Endereco_Colaborador (Colaborador_ID)
    REFERENCES Colaboradors (ID);

-- Reference: Grade_Curso_Trilha_Aprendizado (table: Grade_Cursos)
ALTER TABLE Grade_Cursos ADD CONSTRAINT Grade_Curso_Trilha_Aprendizado FOREIGN KEY Grade_Curso_Trilha_Aprendizado (Trilha_Aprendizados_ID)
    REFERENCES Trilha_Aprendizados (ID);

-- Reference: Pessoa_Fisica_Colaborador (table: Pessoa_Fisicas)
ALTER TABLE Pessoa_Fisicas ADD CONSTRAINT Pessoa_Fisica_Colaborador FOREIGN KEY Pessoa_Fisica_Colaborador (Colaborador_ID)
    REFERENCES Colaboradors (ID);

-- Reference: Pessoa_Juridica_Colaborador (table: Pessoa_Juridicas)
ALTER TABLE Pessoa_Juridicas ADD CONSTRAINT Pessoa_Juridica_Colaborador FOREIGN KEY Pessoa_Juridica_Colaborador (Colaborador_ID)
    REFERENCES Colaboradors (ID);

-- Reference: Trilha_Aprendizado_Pessoa_Fisica (table: Trilha_Aprendizados)
ALTER TABLE Trilha_Aprendizados ADD CONSTRAINT Trilha_Aprendizado_Pessoa_Fisica FOREIGN KEY Trilha_Aprendizado_Pessoa_Fisica (ID)
    REFERENCES Pessoa_Fisicas (Colaborador_ID);

-- End of file.
