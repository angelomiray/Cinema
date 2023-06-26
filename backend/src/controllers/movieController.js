const movieModel = require('../models/movieModel');

const getAll = async (req, res) => {
    const filmes = await movieModel.getAll();
    return res.status(200).json(filmes);
};

const getById = async(req, res) => {
    const movie = await movieModel.getById(req.body.id);
    return res.status(200).json(movie);
}

const createMovie = async (req, res) => {
    const createdMovie = await movieModel.createMovie(req.body);
    return res.status(201).json(createdMovie);
};

const deleteMovie = async (req, res) => {
    const {id} = req.params;
    await movieModel.deleteMovie(id);
    return res.status(204).json();
};

const updateMovie = async (req, res) => {
    const {id} = req.params;
    await movieModel.updateMovie(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createMovie,
    deleteMovie,
    updateMovie
};