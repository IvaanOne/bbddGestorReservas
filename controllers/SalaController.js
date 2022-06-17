// Importo modelo de datos
let Salas = require('../models/SalaModel');



SalaController = {};

SalaController.getAll = (req,res)=> {
        res.json(Salas.findAll());
    };

SalaController.getById = (req, res) => {
        const {id} = req.params;
        res.json(Salas.getById(id));
    };

SalaController.getByNombre = (req,res) => {
        const {Nombre} = req.params;
        res.json(Salas.getByNombre(Nombre));
    };

SalaController.getByPelicula = (req,res) => {
        const {Pelicula} = req.params;
        res.json(Salas.getByPelicula(Pelicula));
    };

module.exports = SalaController;
