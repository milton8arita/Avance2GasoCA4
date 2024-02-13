const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gasolineraSchema = new Schema({
    id: {type: String},
    nombre: {type: String},
    productos: {type: String},
    ubicacion:{
        latitud: {type: Number},
        longitud: {type: Number}
    },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Productos' }] ,
    calificacion: [{ type: Schema.Types.ObjectId, ref: 'Calificaciones' }] 

},{versionKey: false});

const Gasolinera = mongoose.model('Gasolineras', gasolineraSchema);

module.exports = Gasolinera;
