const nameHandler = require('./handlers/nameHandler');

module.exports = app => {
  app.get('/name', nameHandler);
}
