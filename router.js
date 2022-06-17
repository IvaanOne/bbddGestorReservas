
const router = require('express').Router();

// Importando Routes
const ReservaRouter = require('./views/ReservaRoutes');

// Rutas
router.use('/reservas', ReservaRouter);

module.exports = router;


