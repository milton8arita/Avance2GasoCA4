const express = require('express')
const router = express.Router();

const eventoscontroller = require('../controller/eventoscontroller');

router.get('/', eventoscontroller.visualizar);
router.post('/crear', eventoscontroller.crear);
router.post('/editar', eventoscontroller.editar);

router.get('/borrar/:id', eventoscontroller.eliminar);

module.exports = router;

