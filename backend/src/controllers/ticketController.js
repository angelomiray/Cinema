const ticketModel = require('../models/ticketModel');

const getAll = async (req, res) => {
    const tickets = await ticketModel.getAll();
    return res.status(200).json(tickets);
};

const getById = async (req, res) => {
    const ticket = await ticketModel.getById(req.body.id);
    return res.status(200).json(ticket);
};

const createTickets = async (req, res) => {
    const createdTickets = await ticketModel.createTickets(req.body);
    return res.status(201).json(createdTickets);
};

const deleteTickets = async (req, res) => {
    const {id} = req.params;
    await ticketModel.deleteTickets(id);
    return res.status(204).json();
};

const updateTickets = async (req, res) => {
    const {id} = req.params;
    await ticketModel.updateTickets(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getById,
    createTickets,
    deleteTickets,
    updateTickets
};