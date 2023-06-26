const cinemaModel = require('../models/cinemaModel');

const getAll = async (req, res) => {
    const cinemas = await cinemaModel.getAll();
    return res.status(200).json(cinemas);
};

const getById = async(req, res) => {
    const cinema = await cinemaModel.getById(req.body.id);
    return res.status(200).json(cinema);
};

const createCinema = async (req, res) => {
    const createdCinema = await cinemaModel.createCinema(req.body);
    return res.status(201).json(createdCinema);
};

const deleteCinema = async (req, res) => {
    const {id} = req.params;
    await cinemaModel.deleteCinema(id);
    return res.status(204).json();
};

const updateCinema = async (req, res) => {
    const {id} = req.params;
    await cinemaModel.updateCinema(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createCinema,
    deleteCinema,
    updateCinema
};