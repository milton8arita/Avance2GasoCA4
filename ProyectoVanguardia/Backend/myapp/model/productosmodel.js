const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productosSchema = new Schema({
    id: {type: String},
    nombre: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'Gasolineras'}
},{versionKey: false});

const Productos = mongoose.model('Productos', productosSchema);

module.exports = Productos;


