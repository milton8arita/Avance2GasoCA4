const Productos = require('../model/productosmodel');

function visualizar(req, res){
    Productos.find({}).then(Productos =>{
        if(Productos.length)return res.render('index', {Productos})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function  crear (req, res){
    const productos = new Productos({
        id: req.body.id,
        nommbre: req.body.nommbre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        gasolinera: req.body.gasolinera
    })
    productos.save().then(
        res.redirec('/')
    ).catch(err =>res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.latitud_editar
    const precio = req.body.precio_editar
    Productos.findByIdAndUpdate(id, {nombre:nombre, descripcion:descripcion, precio:precio }).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar (req, res){
    const id = req.params.id
    Productos.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err = res.status(500).send({err}))
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
}
