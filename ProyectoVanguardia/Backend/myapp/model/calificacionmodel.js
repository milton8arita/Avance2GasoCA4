const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const calificacionSchema = new Schema({
    puntuacion: { type: Number },
    comentario: { type: String },
    fechaCalificacion: { type: Date },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    gasolinera: { type: Schema.Types.ObjectId, ref: 'Gasolinera' }
});

const Calificacion = mongoose.model('Calificaciones', calificacionSchema);

module.exports = Calificacion;