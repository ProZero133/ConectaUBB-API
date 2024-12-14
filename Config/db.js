const { Pool } = require("pg");
const configEnv = require('../Config/env.config.js');
const userDB = configEnv.userDB;
const passwordDB = configEnv.passwordDB;
const serverIP = configEnv.serverIP;
const portDB = configEnv.portDB;
const database = configEnv.database;
dotenv.config();

const pool = new Pool({
  user: userDB,
  password: passwordDB,
  host: serverIP,
  port: portDB,
  database: database,
});
pool.query('SELECT 1')
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));
module.exports = { pool };
