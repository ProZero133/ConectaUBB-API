const sql = require("mssql");
const configEnv = require('../Config/env.config.js');
const userDB = configEnv.userDB;
const passwordDB = configEnv.passwordDB;
const serverIP = configEnv.serverIP;
const portDB = parseInt(configEnv.portDB);
const database = configEnv.database;

const config = {
  user: userDB,
  password: passwordDB,
  server: serverIP,
  port: portDB,
  database: database,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to true for local dev / self-signed certs
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed! Bad Config: ', err);
    throw err;
  });

module.exports = {
  sql, poolPromise
};