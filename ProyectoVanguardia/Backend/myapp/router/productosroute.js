const express = require('express');
const router = express.Router();

const productoscontroller = require('../controller/productoscontroller');

router.get('/', productoscontroller.visualizar);

router.post('/crear', productoscontroller.crear);

router.post('/editar', productoscontroller.editar)

router.get('/borrar/:id', productoscontroller.eliminar);

module.exports = router;


