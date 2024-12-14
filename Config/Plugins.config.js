// Configura fastify con un límite de 1.5MB para el cuerpo de las peticiones para evitar ataques DoS
const fastify = require('fastify')({ bodyLimit: 1572864 });

const fastifyCors = require('@fastify/cors');
fastify.register(fastifyCors, {
    // Configura los orígenes permitidos
    origin: true
  });

module.exports = fastify;