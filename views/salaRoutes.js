const express = require('express');
const router1 = express.Router();

const SalaController = require('../controllers/SalaController');

//CRUD
router1.get('/', SalaController.getAll);

// METODO GET REFACTORIZADO - READ POR ID / GENERO / TITULO
router1.get('/:id', SalaController.getById);
router1.get('/nombre/:nombre', SalaController.getByNombre);
router1.get('/pelicula/:pelicula', SalaController.getByPelicula);

module.exports = router1;