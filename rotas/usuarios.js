const express = require('express');
const rota = express.Router();

rota.get('/', (req, res) => {
    return res.send({message: "Tudo OK com GET de usuarios"});
});

rota.post('/', (req, res) => {
    return res.send({message: "Tudo OK com POST de usuarios"});
});

rota.post('/criar', (req, res) => {
    return res.send({message: "Seu usuario foi criado"});
});

module.exports = rota;