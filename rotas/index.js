const express = require('express');
const rota = express.Router();

rota.get('/', (req, res) => {
    return res.send({message: "Tudo OK com GET da raiz"});
});


rota.post('/', (req, res) => {
    return res.send({message: "Tudo OK com POST da raiz"});
});

module.exports = rota;