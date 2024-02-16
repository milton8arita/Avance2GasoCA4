const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incidentesSchema = new Schema({
    id: {type: String},
    tipoIncidentes: {type: String},
    descripcion: {type: String},
    fecha: {type: Date},
    accionTomada: {type: String},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'gasolineras'}
},{versionKey: false});

const Incidentes = mongoose.model('incidentes', incidentesSchema);

module.exports = Incidentes;