const express = require('express');
const router = express.Router();

const calificacioncontroller = require('../controller/calificacioncontroller');
router.get('/', calificacioncontroller.visualizar);

router.post('/crear', calificacioncontroller.crear);

router.post('/editar', calificacioncontroller.editar)
router.get('/borrar/:id', calificacioncontroller.eliminar);

module.exports = router;
