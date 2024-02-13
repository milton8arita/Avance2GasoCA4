const Gasolineras = require('../model/gasolineramodel');

function crear (req, res){
    const gasolinera = new Gasolineras({
        nombre: req.body.nombre,
        ubicacion: {
            latitud: req.body.ubicacion.nombre,
            longitud: req.body.ubicacion.longitud,
        }
    });gasolinera.save().then(
        res.redirect('/')
        ).catch(err => res.status(500).send({err}))
}

function visualizar(req, res){
    Gasolineras.find({}).then(Gasolineras =>{
        if(Gasolineras.length)return res.render('index', {Gasolineras})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const latitud = req.body.latitud_editar
    const longitud = req.body.longitud_editar
    Gasolineras.findByIdAndUpdate(id, {nombre:nombre, ubicacion:{latitud:latitud, longitud:longitud}}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar (req, res){
    const id = req.params.id
    Gasolineras.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err = res.status(500).send({err}))
}



module.exports = {
    crear, 
    visualizar,
    eliminar,
    editar
}