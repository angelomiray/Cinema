const userModel = require('../models/userModel');

const getAll = async (req, res) => {
    const users = await userModel.getAll();
    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const user = await userModel.getById(req.body.id);
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const createdUser = await userModel.createUser(req.body);
    return res.status(201).json(createdUser);
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    await userModel.deleteUser(id);
    return res.status(204).json();
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    await userModel.updateUser(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createUser,
    deleteUser,
    updateUser
};