
DROP DATABASE IF EXISTS ionic;

CREATE DATABASE ionic;

use ionic;

-- tables
-- Table: arquivos
CREATE TABLE arquivos (
    id int NOT NULL AUTO_INCREMENT,
    nome_arquivos varchar(300) ,
    extensao varchar(300),
    url_arquivo varchar(500) not null,
    tipo varchar(300),
    colaborador_id int not null,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT arquivos_pk PRIMARY KEY (id)
);

-- Table: acessos
CREATE TABLE acessos (
    id int NOT NULL AUTO_INCREMENT,
    cargos_id int ,
    nivel_acesso int ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT acessos_pk PRIMARY KEY (id)
);

-- Table: cargos
CREATE TABLE cargos (
    id int NOT NULL AUTO_INCREMENT,
    departamento_id int ,
    cargo varchar(300) ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT cargos_pk PRIMARY KEY (id)
);

-- Table: colaboradors
CREATE TABLE colaboradors (
    id int NOT NULL AUTO_INCREMENT,
    cargos_id int ,
    gestor_id int ,
    nome varchar(300) ,
    rg varchar(200) ,
    email varchar(300),
    senha varchar(300) ,
    naturalidade varchar(200),
    nacionalidade varchar(200),
    estado_civil varchar(200),
    genero varchar(200),
    raca varchar(100),
    telefone varchar(300) ,
    data_nascimento varchar(300) ,
    pesquisa_desligamento varchar(300),
    status varchar(200) ,
    dominio varchar(300) ,
    tipo_desligamento varchar(300),
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT colaboradors_pk PRIMARY KEY (id)
);

-- Table: contratos
CREATE TABLE contratos (
    id int NOT NULL AUTO_INCREMENT,
    colaborador_id int ,
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
    createdAt date NOT NULL default (current_date()),
    updatedAt int ,
    data_desligamento date ,
    CONSTRAINT Contrato_pk PRIMARY KEY (id)
);

-- Table: dados_academicos
CREATE TABLE dados_academicos (
    id int NOT NULL AUTO_INCREMENT,
    colaborador_id int ,
    formacao varchar(200) ,
    cursos varchar(200) ,
    termo_pi varchar(200) ,
    linguas varchar(200) ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT dados_academicos_pk PRIMARY KEY (id)
);

-- Table: departamentos
CREATE TABLE departamentos (
    id int NOT NULL AUTO_INCREMENT,
    area varchar(300) ,
    head varchar(300) ,
    head_id int,
    createdAt date NOT NULL default (current_date()),
    updatedAt date,
    CONSTRAINT departamentos_pk PRIMARY KEY (id)
);

-- Table: enderecos
CREATE TABLE enderecos (
    id int NOT NULL AUTO_INCREMENT,
    rua varchar(300),
    estado varchar(200) ,
    regiao varchar(300) ,
    cep varchar(300) ,
    cidade varchar(300) ,
    bairro varchar(300) ,
    complemento varchar(300) ,
    colaborador_id int ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT enderecos_pk PRIMARY KEY (id)
);

-- Table: grade_cursos
CREATE TABLE grade_cursos (
    id int NOT NULL AUTO_INCREMENT,
    trilha_aprendizados_id int ,
    nome_curso varchar(200) ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT grade_cursos_pk PRIMARY KEY (id)
);

-- Table: pessoa_fisicas
CREATE TABLE pessoa_fisicas (
    colaborador_id int NOT NULL,
    cpf varchar(15),
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT pessoa_fisicas_pk PRIMARY KEY (colaborador_id)
);

-- Table: pessoa_juridicas
CREATE TABLE pessoa_juridicas (
    colaborador_id int NOT NULL,
    cnpj varchar(20) ,
    empresa_contratada varchar(300) ,
    tempo_formalizacao varchar(300) ,
    natureza_juridica varchar(300) ,
    data_fundacao varchar(300) ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT pessoa_juridicas_pk PRIMARY KEY (colaborador_id)
);

-- Table: trilha_aprendizados
CREATE TABLE trilha_aprendizados (
    id int NOT NULL AUTO_INCREMENT,
    pessoa_fisicas_colaborador_id int ,
    status_curso varchar(200) ,
    data_inicio date ,
    data_fim date ,
    createdAt date NOT NULL default (current_date()),
    updatedAt date ,
    CONSTRAINT trilha_aprendizados_pk PRIMARY KEY (id)
);

-- foreign keys

-- Reference: arquivos_Colaborador (table: colaboradors)
ALTER TABLE arquivos ADD CONSTRAINT arquivo_colaborador FOREIGN KEY arquivo_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: acesso_cargo (table: acessos)
ALTER TABLE acessos ADD CONSTRAINT acesso_cargo FOREIGN KEY acesso_cargo (cargos_id)
    REFERENCES cargos (id);

-- Reference: Cargo_Colaborador (table: cargos)
ALTER TABLE colaboradors ADD CONSTRAINT colaboradors_Cargo FOREIGN KEY colaboradors_Cargo (cargos_id)
    REFERENCES cargos (id);
    
-- Reference: Colaborador_Colaborador (table: colaboradors)
ALTER TABLE colaboradors ADD CONSTRAINT colaboradors_colaborador FOREIGN KEY colaboradors_colaborador (gestor_id)
    REFERENCES colaboradors (id);
    
ALTER TABLE cargos ADD CONSTRAINT departamento_cargo FOREIGN KEY departamento_cargo (departamento_id)
    REFERENCES departamentos (id) ON DELETE SET NULL;

-- Reference: Contrato_Colaborador (table: contratos)
ALTER TABLE contratos ADD CONSTRAINT contrato_colaborador FOREIGN KEY contrato_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: dados_academicos_Colaborador (table: dados_academicos)
ALTER TABLE dados_academicos ADD CONSTRAINT dados_academicos_colaborador FOREIGN KEY dados_academicos_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: Colaborador_Departamento (table: departamentos)
ALTER TABLE departamentos ADD CONSTRAINT departamentos_colaborador FOREIGN KEY colaboradors_colaborador (head_id)
    REFERENCES colaboradors (id);

-- Reference: Endereco_Colaborador (table: colaboradors)
ALTER TABLE enderecos ADD CONSTRAINT endereco_colaborador FOREIGN KEY endereco_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: Grade_Curso_Trilha_Aprendizado (table: grade_cursos)
ALTER TABLE grade_cursos ADD CONSTRAINT grade_curso_trilha_aprendizado FOREIGN KEY grade_curso_trilha_aprendizado (trilha_aprendizados_id)
    REFERENCES trilha_aprendizados (id);

-- Reference: Pessoa_Fisica_Colaborador (table: pessoa_fisicas)
ALTER TABLE pessoa_fisicas ADD CONSTRAINT pessoa_fisica_colaborador FOREIGN KEY pessoa_fisica_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: Pessoa_Juridica_Colaborador (table: Pessoa_Juridicas)
ALTER TABLE pessoa_juridicas ADD CONSTRAINT pessoa_juridica_colaborador FOREIGN KEY pessoa_juridica_colaborador (colaborador_id)
    REFERENCES colaboradors (id);

-- Reference: Trilha_Aprendizado_Pessoa_Fisica (table: trilha_aprendizados)
ALTER TABLE trilha_aprendizados ADD CONSTRAINT trilha_aprendizado_pessoa_fisica FOREIGN KEY trilha_aprendizado_pessoa_isica (id)
    REFERENCES pessoa_fisicas (colaborador_id);

use ionic;
insert into departamentos(id, area, createdAt) values (1, "Administracao", "2022-04-13");
insert into cargos(id, departamento_id, cargo, createdAt) values (1, 1, "Administrador", "2022-04-13");
insert into colaboradors(id, cargos_id, nome, email, senha, createdAt) values (1, 1, "Admin", "admin@ionic.com", "adminionic", "2022-04-13");
