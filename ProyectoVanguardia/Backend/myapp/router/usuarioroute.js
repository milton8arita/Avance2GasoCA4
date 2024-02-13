const express = require('express');
const router = express.Router();

const usuariocontroller = require('../controller/usuariocontroller');

router.get('/', usuariocontroller.visualizar);

router.post('/crear', usuariocontroller.crear);

router.post('/editar', usuariocontroller.editar);

router.get('/borrar/:id', usuariocontroller.eliminar);

module.exports = router;
