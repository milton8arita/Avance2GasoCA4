const Usuario = require('../model/usuariomodel');

function crear (req, res){
    const usuario = new Usuario({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles,
        calificaciones: req.body.calificaciones

    })
    usuario.save().then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function visualizar (req, res){
    Usuario.find({}).then(Usuario=>{
        if(Usuario.length) return res.render('index',{Usuario:Usuario})
        return res.status('204').send({message: 'No Conten'})
    }).catch(err => res.status(500).send({err}))
}

function editar (req, res){
    const id = req.body.id_editar
    const username = req.body.username_editar
    const email = req.body.email_editar 
    const password = req.body.password_editar
    const roles = req.body.roles_editar
    const calificaciones = req.body.calificaciones_editar
    Usuario.findByIdAndUpdate(id, {username:username, email:email, password:password, roles:roles, calificaciones:calificaciones}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar (req, res){
    const id = req.params.id
    Usuario.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

module.exports = {
    visualizar,
    crear, 
    editar,
    eliminar
}
