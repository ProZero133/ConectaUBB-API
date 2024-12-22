const fastify = require('../Config/Plugins.config.js');
const { ObtenerUsuariosPorCorreo, ObtenerUsuariosPorRut } = require('../services/user.service.js');
module.exports = function (fastify, options, done) {
    fastify.post('/usuariosCorreo', ObtenerUsuariosPorCorreo);
    fastify.post('/usuariosRut', ObtenerUsuariosPorRut);
    done();
  };