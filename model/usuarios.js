const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    senha: { type: String,  required: true, select: false },
    data_criacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);