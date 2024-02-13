const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Proyecto';

mongoose.connect(url)

const db = mongoose.connection;

db.on('Error', console.error.bind(console, 'Error al conectar Base de Datos con Mongo'))
db.once('open', function callback(){
    console.log('Conectandose a MongoDB.. ')
})

module.exports = db;




