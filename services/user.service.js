async function ObtenerUsuarios(req, res) {
    try {
        console.log('ObtenerUsuarios');
    } catch (error) {
        res.status(500).json({ error: error.message });   
    }
}
module.exports = {
ObtenerUsuarios
};