const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UsuarioSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    senha: { type: String,  required: true, select: false },
    data_criacao: { type: Date, default: Date.now }
});

//Não usar o arrow function, pois ao utilizar o this dentro não funciona
UsuarioSchema.pre('save', function(next) {
    let usuario = this;
    if(!usuario.isModified('senha')) return next();

    bcrypt.hash(usuario.senha, 10, (erro, senhaEncriptada) => {
        usuario.senha = senhaEncriptada;
        return next();
    });
});

module.exports = mongoose.model('Usuario', UsuarioSchema);