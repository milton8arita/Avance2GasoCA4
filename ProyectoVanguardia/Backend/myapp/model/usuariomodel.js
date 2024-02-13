const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id: {type: String},
    username: {type: String},
    email: {type: String, unique: true}, //para que el usuario no sea duplicado
    password: {type: String},
    roles: {type: Array},
    calificaciones: [{ type: Schema.Types.ObjectId, ref: 'Calificacion' }] 

}, {versionKey:false});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

