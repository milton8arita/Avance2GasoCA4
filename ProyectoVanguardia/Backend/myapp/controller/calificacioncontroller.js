const Calificacion = require('../model/calificacionmodel');

function crear (req, res){
    const usuarioId = req.body.usuarioId;
    const gasolineraId = req.body.gasolineraId;
    const calificacion = new Calificacion({
        nombre: req.body.nombre,
        puntuacion: req.body.puntuacion,
        comentario: req.body.comentario,
        fechaCalificacion: req.body.fechaCalificacion,
        usuario: usuarioId,
        gasolinera: gasolineraId
    });calificacion.save().then(
        res.redirect('/')
        ).catch(err => res.status(500).send({err}))
}

function visualizar(req, res){
    Calificacion.find({}).then(Calificacion =>{
        if(Calificacion.length)return res.render('index', {Calificacion})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const puntuacion = req.body.puntuacion_editar
    const comentario = req.body.comentario_editar
    const fechaCalificacion = req.body.fechaCalificacion_editar
    Calificacion.findByIdAndUpdate(id, {nombre:nombre, puntuacion:puntuacion, comentario:comentario,fechaCalificacion:fechaCalificacion}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar (req, res){
    const id = req.params.id
    Calificacion.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err = res.status(500).send({err}))
}



module.exports = {
    crear, 
    visualizar,
    eliminar,
    editar
}