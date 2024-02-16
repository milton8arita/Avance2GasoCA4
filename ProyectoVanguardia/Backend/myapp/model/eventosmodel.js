const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventosSchema = new Schema({
    id: {type: String},
    id_gasolinera: [{ type: Schema.Types.ObjectId, ref: 'gasolineras' }] ,
    fecha_inicio: {type: Date},
    fecha_cierre: {type: Date},
    descripcion: {type: String}
},{versionkey: false})

const Eventos = mongoose.model('eventos', eventosSchema);

module.exports = Eventos;
