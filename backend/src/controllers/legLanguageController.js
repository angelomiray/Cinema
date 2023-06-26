const legLanguageModel = require('../models/legLanguageModel');

const getAll = async (req, res) => {
    const idiomas = await legLanguageModel.getAll();
    return res.status(200).json(idiomas);
};

const getById = async(req, res) => {
    const leg_language = await legLanguageModel.getById(req.body.idFilme, req.body.idIdioma);
    return leg_language;
}

const createLegLanguage = async (req, res) => {
    const createdLegLanguage = await legLanguageModel.createLegLanguage(req.body);
    return res.status(201).json(createdLegLanguage);
};

const deleteLegLanguage = async (req, res) => {
    const {id} = req.params;
    await legLanguageModel.deleteLegLanguage(id);
    return res.status(204).json();
};

const updateLegLanguage = async (req, res) => {
    const {id} = req.params;
    await legLanguageModel.updateLegLanguage(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createLegLanguage,
    deleteLegLanguage,
    updateLegLanguage
};