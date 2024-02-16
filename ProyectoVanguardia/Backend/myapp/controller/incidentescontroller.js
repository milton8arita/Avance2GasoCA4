const Incidentes = require('../model/incidentesmodel');

function crear (req, res){
    const gasolineraId = req.body.gasolineraId;
    const incidentes = new Incidentes({
        tipoIncidente: req.body.tipoIncidente,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        accionTomada: req.body.accionTomada,
        gasolinera: gasolineraId

    })
    incidentes.save().then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function visualizar (req, res){
    Incidentes.find({}).then(Incidentes=>{
        if(Incidentes.length) return res.render('index',{Incidentes:Incidentes})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function editar (req, res){
    const id = req.body.id_editar
    const tipoIncidente = req.body.tipoIncidente_editar
    const descripcion = req.body.descripcion_editar 
    const fecha = req.body.fecha_editar
    const accionTomada = req.body.accionTomada_editar
    Incidentes.findByIdAndUpdate(id, {tipoIncidentes:tipoIncidente, descripcion:descripcion, fecha:fecha, accionTomada:accionTomada}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar (req, res){
    const id = req.params.id
    Incidentes.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

module.exports = {
    visualizar,
    crear, 
    editar,
    eliminar
}
