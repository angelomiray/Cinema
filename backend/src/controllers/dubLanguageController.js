const dubLanguageModel = require('../models/dubLanguageModel');

const getAll = async (req, res) => {
    const idiomas = await dubLanguageModel.getAll();
    return res.status(200).json(idiomas);
};

const getById = async(req, res) => {
    const dub_language = await dubLanguageModel.getById(req.body.idFilme, req.body.idIdioma);
    return dub_language;
}

const createDubLanguage = async (req, res) => {
    const createdDubLanguage = await dubLanguageModel.createDubLanguage(req.body);
    return res.status(201).json(createdDubLanguage);
};

const deleteDubLanguage = async (req, res) => {
    const {id} = req.params;
    await dubLanguageModel.deleteDubLanguage(id);
    return res.status(204).json();
};

const updateDubLanguage = async (req, res) => {
    const {id} = req.params;
    await dubLanguageModel.updateDubLanguage(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createDubLanguage,
    deleteDubLanguage,
    updateDubLanguage
};