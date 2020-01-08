const express = require('express');
const rota = express.Router();
const Usuarios = require('../model/usuarios');
const bcrypt = require('bcrypt');

rota.get('/', async (req, res) => {
    try {
        const usuarios = await Usuarios.find({});
        return res.send(usuarios);
    } catch (erro) {
        return res.send({ error: 'Erro ao buscar usuarios'});
    }
});

rota.post('/criar', async (req, res) => {
    const {email, senha} = req.body;
    
    if(!email || !senha)
        return res.send({ error: 'Dados insuficientes'});

    try {
        if(await Usuarios.findOne({email}))
            return res.send({ error: 'Usuário já registrado!' });
        
        const usuario = await Usuarios.create(req.body);
        usuario.senha = undefined;
        return res.send(usuario);

    } catch (erro) {
        return res.send({ error: 'Erro ao buscar usuário!' });
    }
});

rota.post('/auth', async (req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha) return res.send({error: 'Dados insuficientes'});

    try {
        const usuario = await Usuarios.findOne({email}).select('+senha');
        if(!usuario) return res.send({error: 'Usuário não registrado'});

        const senha_ok = await bcrypt.compare(senha, usuario.senha);
        if(!senha_ok) return res.send({error: 'Erro ao autenticar usuario'});
        usuario.senha = undefined;
        return res.send(usuario);
    } catch (erro) {
        return res.send({error: 'Erro ao buscar Usuário'});
    }
});

module.exports = rota;