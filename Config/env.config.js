"use strict";
// Importa el modulo 'path' para obtener la ruta absoluta del archivo .env
const path = require("path");

/**  Obtiene la ruta absoluta del archivo .env. */
const envFilePath = path.resolve(__dirname, ".env");

// Carga las variables de entorno desde el archivo .env
require("dotenv").config({ path: envFilePath });

/** Dirección IP del servidor destino */
const serverIP = process.env.serverIP;
/** Puerto de escucha para la API */
const hostPort = process.env.hostPort;
/** Usuario para la base de datos */
const userDB = process.env.userDB;
/** Contraseña base de datos */
const passwordDB = process.env.passwordDB;
/** Puerto base de datos */
const portDB = process.env.portDB;
/** Nombre de la base de datos */
const database = process.env.database;
/** Direcciones IP admitidas por Fastify (0.0.0.0 para escuchar en todas)*/
const fastifyHost = process.env.fastifyHost;


module.exports = { serverIP, hostPort, userDB, passwordDB, portDB, database, fastifyHost };