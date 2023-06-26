const chairModel = require('../models/chairModel');

const getAll = async (req, res) => {
    const cadeiras = await chairModel.getAll();
    return res.status(200).json(cadeiras);
};

const getById = async(req, res) => {
    const cadeira = await chairModel.getById(req.body.id);
    return res.status(200).json(cadeira);
};

const createChair = async (req, res) => {
    const createdChair = await chairModel.createChair(req.body);
    return res.status(201).json(createdChair);
};

const deleteChair = async (req, res) => {
    const {id} = req.params;
    await chairModel.deleteChair(id);
    return res.status(204).json();
};

const updateChair = async (req, res) => {
    const {id} = req.params;
    await chairModel.updateChair(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createChair,
    deleteChair,
    updateChair
};