const Productos = require('../model/productosmodel');

function visualizar (req, res){

}

function  crear (req, res){
    const productos = new Productos({
        id: req.body.id,
        nommbre: req.body.nommbre,
        descripcion: req.body.descripcion,
        gasolinera: req.body.gasolinera
    })
    productos.save().then(
        res.redirec('/')
    ).catch(err =>res.status(500).send({err}))
}

function editar (req, res){

}

function eliminar (req, res){

}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
}