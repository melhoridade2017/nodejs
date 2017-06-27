"use strict";

//Dependencias do projeto
const express = require('express');
const http = require('http');
const expressLayouts = require('express-ejs-layouts');

//APP
const app = express();

//Middlewares -> Antes da requisição
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayouts);
//Onde fica o HTML
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
//Nesse local estarão os: CSS,JS E images
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));


//As rotas
let routes = require('./routes');
routes.set(app);


const port = 80;

app.listen(port, function(){
    console.log('Estou funcionando na porta 80');
});