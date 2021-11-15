const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const casa = require('../api/routes/casa');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());

  app.use('/api/v1/casa', casa);

  return app;
};