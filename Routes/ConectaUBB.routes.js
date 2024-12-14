const fastify = require('../Config/Plugins.config.js');
const { ObtenerUsuarios } = require('../services/user.service.js');
module.exports = function (fastify, options, done) {
    fastify.get('/usuarios', ObtenerUsuarios);
    done();
  };