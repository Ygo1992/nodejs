const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const url = 'mongodb+srv://usuario_admin:nMFRT0Ee7dfpynoe@clusterapi-vyx1s.mongodb.net/test?retryWrites=true&w=majority';
const opcoes = { 
    useUnifiedTopology: true, //falhas mais rápidas e mapeadas de maneira melhorada
    useNewUrlParser: true //versao atualizada que sera incorporada automaticamente futuramente
};

mongoose.connect(url, opcoes);
mongoose.set('useCreateIndex', true);


mongoose.connection.on('error', (erro) => {
    console.log('Erro na conexao com BD: ' + erro);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicacao desconectada do BD');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicacao conectada ao BD');
});

//Configurando BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rotaIndex = require('./rotas/index');
const rotaUsuarios = require('./rotas/usuarios');

app.use('/', rotaIndex);
app.use('/usuarios', rotaUsuarios);



app.listen(3000);

module.exports = app;