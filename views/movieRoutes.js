const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/MovieController');

//CRUD
router.get('/', MovieController.getAll);

// METODO GET REFACTORIZADO - READ POR ID / GENERO / TITULO
router.get('/:id', MovieController.getById);
router.get('/genero/:genre', MovieController.getByGenre);
router.get('/title/:title', MovieController.getByTitle);

module.exports = router;