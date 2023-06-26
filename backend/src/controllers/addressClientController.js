const addressClientModel = require('../models/addressClientModel');

const getAll = async (req, res) => {
    const enderecos = await addressClientModel.getAll();
    return res.status(200).json(enderecos);
};

const getById = async(req, res) => {
    const endereco = await addressClientModelModel.getById(req.body.id);
    return res.status(200).json(endereco);
};

const createAddressClient = async (req, res) => {
    const createdAddressClient = await addressClientModel.createAddressClient(req.body);
    return res.status(201).json(createdAddressClient);
};

const deleteAddressClient = async (req, res) => {
    const {id} = req.params;
    await addressClientModel.deleteAddressClient(id);
    return res.status(204).json();
};

const updateAddressClient = async (req, res) => {
    const {id} = req.params;
    await addressClientModel.updateAddressClient(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createAddressClient,
    deleteAddressClient,
    updateAddressClient
};