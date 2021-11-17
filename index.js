const app = require('./config/express')();
const port = app.get('port');

if (require.main === module){
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;