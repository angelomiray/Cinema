const roomModel = require('../models/roomModel');

const getAll = async (req, res) => {
    const salas = await roomModel.getAll();
    return res.status(200).json(salas);
};

const getById = async (req, res) => {
    const sala = await roomModel.getById(req.body.id);
    return res.status(200).json(sala);
};

const createRoom = async (req, res) => {
    const createdRoom = await roomModel.createRoom(req.body);
    return res.status(201).json(createdRoom);
};

const deleteRoom = async (req, res) => {
    const {id} = req.params;
    await roomModel.deleteRoom(id);
    return res.status(204).json();
};

const updateRoom = async (req, res) => {
    const {id} = req.params;
    await roomModel.updateRoom(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createRoom,
    deleteRoom,
    updateRoom
};