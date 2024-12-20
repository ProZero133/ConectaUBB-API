const { poolPromise } = require('../Config/db.js');

async function ObtenerUsuarios(req, res) {
    try {
        const pool = await poolPromise;
        // Query de ejemplo donde nombre sea igual a Sebastian
        const result = await pool.request().query('SELECT * FROM VTA_WEB_IDENTIFICACION_API WHERE correo = \'vicente.castillo2001@alumnos.ubiobio.cl\'');
        console.log(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    ObtenerUsuarios
};