const clientModel = require('../models/clientModel');

const getAll = async (req, res) => {
    const clientes = await clientModel.getAll();
    return res.status(200).json(clientes);
};

const getById = async(req, res) => {
    const cliente = await clientModel.getById(req.body.id);
    return res.status(200).json(cliente);
};

const createClient = async (req, res) => {
    const createdClient = await clientModel.createClient(req.body);
    return res.status(201).json(createdClient);
};

const deleteClient = async (req, res) => {
    const {id} = req.params;
    await clientModel.deleteClient(id);
    return res.status(204).json();
};

const updateClient = async (req, res) => {
    const {id} = req.params;
    await clientModel.updateClient(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createClient,
    deleteClient,
    updateClient
};