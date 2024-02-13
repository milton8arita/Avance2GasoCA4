const express = require('express');
const router = express.Router();

const gasolineracontroller = require('../controller/gasolineracontroller');

router.get('/', gasolineracontroller.visualizar);

router.post('/crear', gasolineracontroller.crear);

router.post('/editar', gasolineracontroller.editar);

router.get('/borrar/:id', gasolineracontroller.eliminar);

module.exports = router;

