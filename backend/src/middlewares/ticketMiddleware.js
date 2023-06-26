const clientModel = require('../models/clientModel');
const sessionModel = require('../models/sessionModel');
const chairModel = require('../models/chairModel');
const ticketModel = require('../models/ticketModel');

const validatePreco = async (req, res, next) => {
    const {body} = req;
    
    if (body.preco === undefined){
        return res.status(400).json({message:'The field "preco" is required'});
    }
    
    if (body.preco === ""){
        return res.status(400).json({message:'The field "preco" cannot be empty'});
    }

    next();
}

const validateDataHora = async (req, res, next) => {
    const {body} = req;
    
    if (body.dataHora === undefined){
        return res.status(400).json({message:'The field "dataHora" is required'});
    }
    
    if (body.dataHora === ""){
        return res.status(400).json({message:'The field "dataHora" cannot be empty'});
    }

    next();
}

const validateCpf = async (req, res, next) => {
    const {body} = req;
    
    if (body.cpfCliente === undefined){
        return res.status(400).json({message:'The field "cpfCliente" is required'});
    }
    
    if (body.cpfCliente === ""){
        return res.status(400).json({message:'The field "cpfCliente" cannot be empty'});
    }
    
    const readClient = await clientModel.readClientById(body);
    if (readClient.length == 0){
        return res.status(400).json({message:'This client doesnt exists'});
    }

    next();
}

const validateSessao = async (req, res, next) => {
    const {body} = req;
    
    if (body.idSessao === undefined){
        return res.status(400).json({message:'The field "idSessao" is required'});
    }
    
    if (body.idSessao === ""){
        return res.status(400).json({message:'The field "idSessao" cannot be empty'});
    }
    
    const readSession = await sessionModel.readSessionById(body);
    if (readSession.length == 0){
        return res.status(400).json({message:'This session doesnt exists'});
    }

    next();
}

const validateCadeira = async (req, res, next) => {
    const {body} = req;
    
    if (body.idCadeira === undefined){
        return res.status(400).json({message:'The field "idCadeira" is required'});
    }
    
    if (body.idCadeira === ""){
        return res.status(400).json({message:'The field "idCadeira" cannot be empty'});
    }
    
    const readChair = await chairModel.readChairById(body);
    if (readChair.length == 0){
        return res.status(400).json({message:'This chair doesnt exists'});
    }
    
    next();
}

const validateTicket = async (req, res, next) => {
    const {body} = req;
    
    const readTicket = await ticketModel.readTicket(body);
    if (readTicket.length > 0){
        return res.status(400).json({message:'This ticket already exists'});
    }

    next();
}

module.exports = {
    validatePreco,
    validateDataHora,
    validateCpf,
    validateSessao,
    validateCadeira,
    validateTicket
};