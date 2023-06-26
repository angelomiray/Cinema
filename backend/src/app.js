const express = require('express');
const router = require('./router');
const app = express();

//Permite que o app transporte e manipule json no corpo das requisições
app.use(express.json());
//Usa o arquivo de rotas da nossa aplicação
app.use(router);

module.exports = app;