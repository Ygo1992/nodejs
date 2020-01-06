const express = require('express');
const app = express();

const rotaIndex = require('./rotas/index');
const rotaUsuarios = require('./rotas/usuarios');

app.use('/', rotaIndex);
app.use('/usuarios', rotaUsuarios);



app.listen(3000);

module.exports = app;