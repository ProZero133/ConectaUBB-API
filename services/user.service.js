const { poolPromise, sql } = require('../Config/db.js');

async function ObtenerUsuariosPorCorreo(req, res) {
    try {
        const correo = req.body.correo;
        const pool = await poolPromise;
        const result = await pool.request().input('correo', sql.VarChar, correo).query('SELECT * FROM VTA_WEB_IDENTIFICACION_API WHERE correo = @correo');
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
async function ObtenerUsuariosPorRut(req, res) {
    try {
        const rut = req.body.rut;
        const pool = await poolPromise;
        const result = await pool.request().input('rut', sql.VarChar, rut).query('SELECT * FROM VTA_WEB_IDENTIFICACION_API WHERE rut = @rut');
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function getSubstringCorreo(req, res) {
    try {
        const correo = req.body.correo;
        const pool = await poolPromise;
        const result = await pool.request().input('correo', sql.VarChar, `%${correo}%`).query('SELECT * FROM VTA_WEB_IDENTIFICACION_API WHERE correo LIKE @correo');
        // console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}



module.exports = {
    ObtenerUsuariosPorCorreo,
    ObtenerUsuariosPorRut,
    getSubstringCorreo
};