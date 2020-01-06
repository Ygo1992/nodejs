const express = require('express');
const app = express();

/************  Versão antiga ************
/app.get('/', function(req, res) {
    return res.send({message: "Tudo OK com método GET"});
});
****************************************/
app.get('/', (req, res) => {
    let obj = req.query;
    //http://localhost:3000/?nome=Ygo
    return res.send({message: `Você enviou o nome ${obj.nome}`});
});

app.post('/', (req, res) => {
    return res.send({message: "Tudo OK com método POST"});
});

app.listen(3000);

module.exports = app;