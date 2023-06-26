const languageModel = require('../models/languageModel');

const getAll = async (req, res) => {
    const idiomas = await languageModel.getAll();
    return res.status(200).json(idiomas);
};

const getById = async(req, res) => {
    const idioma = await languageModel.getById(req.body.id);
    return idioma;
};

const createLanguage = async (req, res) => {
    const createdLanguage = await languageModel.createLanguage(req.body);
    return res.status(201).json(createdLanguage);
};

const deleteLanguage = async (req, res) => {
    const {id} = req.params;
    await languageModel.deleteLanguage(id);
    return res.status(204).json();
};

const updateLanguage = async (req, res) => {
    const {id} = req.params;
    await languageModel.updateLanguage(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createLanguage,
    deleteLanguage,
    updateLanguage
};