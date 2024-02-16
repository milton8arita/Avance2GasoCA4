const Eventos = require('../model/eventosmodel');



function visualizar (req, res){
    Eventos.find({}).then(Eventos=>{
        if(Eventos.length) return res.render('index',{Eventos:Eventos})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function crear (req, res){
    const eventos = new Eventos({
        nombre: req.body.nombre,
        id_gasolinera: req.body.id_gasolinera,
        fecha_inicio: req.body.fecha_inicio,
        fecha_cierre: req.body.fecha_cierre,
        descripcion: req.body.descripcion
    })
    eventos.save().then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))}


function editar (req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const id_gasolinera = req.body.id_gasolinera_editar 
    const fecha_inicio = req.body.fecha_inicio_editar
    const fecha_cierre = req.body.fecha_cierre_editar
    const descripcion = req.body.descripcion_editar
   
    Eventos.findByIdAndUpdate(id, {username:username, id_gasolinera:id_gasolinera, fecha_inicio:fecha_inicio, fecha_cierre:fecha_cierre,
    descripcion:descripcion}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}


function eliminar (req, res){
    const id = req.params.id
    Eventos.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

module.exports = {
    visualizar,
    crear, 
    editar,
    eliminar
}
