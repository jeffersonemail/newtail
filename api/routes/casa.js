/*
module.exports = app => {
  const controller = require('../controllers/casa')();

  app.route('/api/v1/casa')
    .post(controller.adicionar)
    .get(controller.listarCasas);
    
  app.route('api/v1/casa/nome/:id')
      .get(controller.buscarPorNome);

  app.route('api/v1/casa/:id')
    .get(controller.buscarPorId)
    .delete(controller.remover);
}
*/
var express = require('express');
var router = express.Router();
const controller = require('../controllers/casa')();

router.post('/', controller.adicionar);

router.get('/', controller.listarCasas);

router.get('/nome/:nome', controller.buscarPorNome);

router.get('/:id', controller.buscarPorId);

router.delete('/:id', controller.remover);

module.exports = router;