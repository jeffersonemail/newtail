var express = require('express');
var router = express.Router();
const controller = require('../controllers/casa')();

router.post('/', controller.adicionar);

router.get('/', controller.listarCasas);

router.get('/nome/:nome', controller.buscarPorNome);

router.get('/:id', controller.buscarPorId);

router.delete('/:id', controller.remover);

module.exports = router;