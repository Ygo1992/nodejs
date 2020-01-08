const express = require('express');
const rota = express.Router();
const Usuarios = require('../model/usuarios');

rota.get('/', (req, res) => {
    Usuarios.find({}, (erro, data) => {
        if(erro) return res.send({ error: 'Erro ao buscar usuarios'});
        return res.send(data);
    });
});

rota.post('/criar', (req, res) => {
    const {email, senha} = req.body;//se o body possuir email e senha o JS já cria as consts email e senha com os valores
    console.log(req);
    if(!email || !senha)
        return res.send({ error: 'Dados insuficientes'});

    //pode ser reescrito para "Usuarios.findOne({ email });" pois possuem o msm nome
    Usuarios.findOne({ email: email }, (erro, data) => {//Busca Usuário e verifica se deu erro na busca ou se retornou algum usuário já cadastrado com este email, caso contrario tenta cadastrar
        if(erro) return res.send({ error: 'Erro ao buscar usuário!' });
        if(data) return res.send({ error: 'Usuário já registrado!' });

        //pode ser reescrito para Usuarios.create({req.body}); pois o corpo só terá essas informações
        Usuarios.create({email: email, senha: senha}, (erro, data) => {
            if(erro) return res.send({ error: 'Erro ao criar Usuário'});
            data.senha = undefined;//tirando a senha para não devolver ao criar novo usuario
            return res.send(data);
        });
    });
});

module.exports = rota;