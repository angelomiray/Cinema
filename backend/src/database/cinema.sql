-- Active: 1687628823242@@127.0.0.1@3306@cinema
CREATE DATABASE cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS Cinema (
  idCinema INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(60) NOT NULL,
  rua VARCHAR(100) NOT NULL,
  numero INT UNSIGNED ZEROFILL NOT NULL,
  cidade VARCHAR(45) NOT NULL,
  estado CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Sala (
  idSala INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  numero INT UNSIGNED ZEROFILL NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  capacidade INT UNSIGNED NOT NULL,
  idCinema INT NOT NULL,
  CONSTRAINT fk_Sala_Cinema
    FOREIGN KEY (idCinema)
    REFERENCES Cinema (idCinema)
);

CREATE TABLE IF NOT EXISTS Filme (
  idFilme INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(45) NOT NULL,
  diretor VARCHAR(45) NOT NULL,
  genero VARCHAR(45) NOT NULL,
  classificacaoIndicativa VARCHAR(7) NOT NULL,
  duracao TIME NOT NULL,
  sinopse MEDIUMTEXT NOT NULL,
  copyrights VARCHAR(45) NOT NULL,
  ano INT UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS Idioma (
  idIdioma INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idioma VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS IdiomaLegenda (
  Filme_idFilme INT NOT NULL,
  Idioma_idIdioma INT NOT NULL,
  CONSTRAINT fk_Idioma_Legenda_Filme
    FOREIGN KEY (Filme_idFilme)
    REFERENCES Filme (idFilme)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Idioma_Legenda_Idioma
    FOREIGN KEY (Idioma_idIdioma)
    REFERENCES Idioma (idIdioma)
);

CREATE TABLE IF NOT EXISTS IdiomaDublagem (
  Filme_idFilme INT NOT NULL,
  Idioma_idIdioma INT NOT NULL,
  nativa TINYINT NOT NULL,
  CONSTRAINT fk_Idioma_Dublagem_Filme
    FOREIGN KEY (Filme_idFilme)
    REFERENCES Filme (idFilme)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Idioma_Dublagem_Idioma
    FOREIGN KEY (Idioma_idIdioma)
    REFERENCES Idioma (idIdioma)
);

CREATE TABLE IF NOT EXISTS Sessao (
  idSessao INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idiomaLegenda INT /*NULL*/,
  idiomaDublagem INT NOT NULL,
  dataHoraInicio VARCHAR(45) NOT NULL,
  dataHoraFim VARCHAR(45) NOT NULL,
  idFilme INT NOT NULL,
  idSala INT NOT NULL,
  CONSTRAINT fk_Sessao_Filme
    FOREIGN KEY (idFilme)
    REFERENCES Filme (idFilme),
  CONSTRAINT fk_Sessao_Idioma_Leg
    FOREIGN KEY (idiomaLegenda)
    REFERENCES Idioma (idIdioma),
  CONSTRAINT fk_Sessao_Idioma_Dub
    FOREIGN KEY (idiomaDublagem)
    REFERENCES Idioma (idIdioma),
  CONSTRAINT fk_Sessao_Sala
    FOREIGN KEY (idSala)
    REFERENCES Sala (idSala)
);

CREATE TABLE IF NOT EXISTS Cadeira (
  idCadeira INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tipo ENUM('Padrao', 'Reclinavel', 'VIP', 'DBox', 'Casal', 'Necessidade Especial') NOT NULL,
  posicaoX INT NOT NULL,
  posicaoY INT NOT NULL,
  idSala INT NOT NULL,
  CONSTRAINT fk_Cadeira_Sala
    FOREIGN KEY (idSala)
    REFERENCES Sala (idSala)

);

CREATE TABLE IF NOT EXISTS Cliente (
  cpf CHAR(11) PRIMARY KEY NOT NULL,
  nome VARCHAR(45) NOT NULL,
  dataNascimento VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  telefone CHAR(15) NOT NULL
);

CREATE TABLE IF NOT EXISTS EnderecoCliente (
  idEndereco INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  endereco VARCHAR(255) NOT NULL,
  cpfCliente CHAR(11) NOT NULL,
  CONSTRAINT fk_Endereco_Cliente_Cliente
    FOREIGN KEY (cpfCliente)
    REFERENCES Cliente (cpf)
);

CREATE TABLE IF NOT EXISTS Usuario (
  idUser INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user VARCHAR(45) UNIQUE NOT NULL,
  senha CHAR(32) NOT NULL,
  adm TINYINT NOT NULL,
  idCinema INT,
  idCliente CHAR(11), 
  CONSTRAINT fk_Usuario_Cinema
    FOREIGN KEY (idCinema)
    REFERENCES Cinema (idCinema),
  CONSTRAINT fk_Usuario_Cliente
    FOREIGN KEY (idCliente)
    REFERENCES Cliente (cpf)
);

CREATE TABLE IF NOT EXISTS Cartao (
  idCartao INT PRIMARY KEY NOT NULL,
  numero VARCHAR(16) NOT NULL,
  nomeTitular VARCHAR(45) NOT NULL,
  validade VARCHAR(45) NOT NULL,
  bandeira ENUM('Visa', 'MasterCard', 'Elo', 'American Express', 'Hipercard', 'Diners Club', 'Alelo') NOT NULL,
  cpfCliente CHAR(11) NOT NULL,
  CONSTRAINT fk_Cartao_Cliente
    FOREIGN KEY (cpfCliente)
    REFERENCES Cliente (cpf)

);

CREATE TABLE IF NOT EXISTS Ticket (
  idTicket INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  preco FLOAT UNSIGNED NOT NULL,
  dataHora VARCHAR(45) NOT NULL,
  cpfCliente CHAR(11) NOT NULL,
  idSessao INT NOT NULL,
  idCadeira INT NOT NULL,
  CONSTRAINT fk_Ticket_Cadeira
    FOREIGN KEY (idCadeira)
    REFERENCES Cadeira (idCadeira),
  CONSTRAINT fk_Ticket_Sessao
    FOREIGN KEY (idSessao)
    REFERENCES Sessao (idSessao),
  CONSTRAINT fk_Ticket_Cliente
    FOREIGN KEY (cpfCliente)
    REFERENCES Cliente (cpf)
);