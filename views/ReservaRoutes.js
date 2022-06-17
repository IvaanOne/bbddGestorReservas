const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ReservaController = require('../controllers/ReservaController');

// End-points CRUD Reservas
router.get('/', ReservaController.getAll);
router.get('/:id', ReservaController.getById);
router.get('/cliente/:clientName', ReservaController.getByCliente);
router.get('/telefono/:telefono', ReservaController.getByTelefono);
router.get('/email/:email', ReservaController.getByEmail);
router.get('/hotel/:hotelName', ReservaController.getByHotel);
router.get('/fechaEntrada', ReservaController.getByFechaE);
router.get('/fechaSalida', ReservaController.getByFechaS);




module.exports = router;