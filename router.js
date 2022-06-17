
const MovieRouter = require('./routes/movieRoutes');
let router = require('express').Router();

// Rutas
router.use('/movies', MovieRouter);

// añadir router de salas si ya tengo el de pelis
// definir salarouter salacontroller sala model

module.exports = router;


