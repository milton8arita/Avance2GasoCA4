const express = require('express')

const router = express.Router();

const incidentescontroller = require('../controller/incidentescontroller');
const { route } = require('./usuarioroute');

router.get('/', incidentescontroller.visualizar);
router.post('/crear', incidentescontroller.crear);

router.post('/editar', incidentescontroller.editar);
router.get('/borrar/:id', incidentescontroller.eliminar);

module.exports = router;


