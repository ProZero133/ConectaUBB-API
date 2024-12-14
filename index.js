const fastify = require('./Config/Plugins.config.js');
const rutasConectaUBB = require('./Routes/ConectaUBB.routes.js');
const configEnv = require('./Config/env.config.js');
const port = configEnv.hostPort;
const host = configEnv.fastifyHost;
// Rutas
fastify.register(rutasConectaUBB, { prefix: '/ConectaUBB/api' });

// Iniciar el servidor
fastify.listen({
    port: port,
    host: host,
}, (err) => {
    if (err) {
        console.error('Error al iniciar el servidor:', err);
        process.exit(1);
    }
    console.log(`Servidor escuchando en el puerto ${port}`);
});
module.exports = fastify;