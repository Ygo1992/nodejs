const express = require('express');
const rota = express.Router();
const auth = require('../middlewares/auth');

rota.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    
    return res.send({message: "Tudo OK com GET da raiz"});
});


rota.post('/', (req, res) => {
    return res.send({message: "Tudo OK com POST da raiz"});
});

module.exports = rota;