const sessionModel = require('../models/sessionModel');

const getAll = async (req, res) => {
    const sessoes = await sessionModel.getAll();
    return res.status(200).json(sessoes);
};

const getById = async (req, res) => {
    const session = await sessionModel.getById(req.body.id);
    return res.status(200).json(session);
};

const createSession = async (req, res) => {
    const createdSession = await sessionModel.createSession(req.body);
    return res.status(201).json(createdSession);
};

const deleteSession = async (req, res) => {
    const {id} = req.params;
    await sessionModel.deleteSession(id);
    return res.status(204).json();
};

const updateSession = async (req, res) => {
    const {id} = req.params;
    await sessionModel.updateSession(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createSession,
    deleteSession,
    updateSession
};