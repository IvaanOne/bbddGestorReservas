// Importo modelo de datos
let movies = require('../models/MovieModel');



MovieController = {};

MovieController.getAll = (req,res)=> {
        res.json(movies.findAll());
    };

MovieController.getById = (req, res) => {
        const {id} = req.params;
        res.json(movies.getById(id));
    };

MovieController.getByTitle = (req,res) => {
        const {title} = req.params;
        res.json(movies.getByTitle(title));
    };

MovieController.getByGenre = (req,res) => {
        const {genre} = req.params;
        res.json(movies.getByGenre(genre));
    };

module.exports = MovieController;
