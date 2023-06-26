const creditCardModel = require('../models/creditCardModel');

const getAll = async (req, res) => {
    const cartoes = await creditCardModel.getAll();
    return res.status(200).json(cartoes);
};

const getById = async(req, res) => {
    const cartao = await creditCardModel.getById(req.body.id);
    return res.status(200).json(cartao);
}

const createCreditCard = async (req, res) => {
    const createdCreditCard = await creditCardModel.createCreditCard(req.body);
    return res.status(201).json(createdCreditCard);
};

const deleteCreditCard = async (req, res) => {
    const {id} = req.params;
    await creditCardModel.deleteCreditCard(id);
    return res.status(204).json();
};

const updateCreditCard = async (req, res) => {
    const {id} = req.params;
    await creditCardModel.updateCreditCard(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createCreditCard,
    deleteCreditCard,
    updateCreditCard
};