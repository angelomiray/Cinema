const clientModel = require('../models/clientModel');
const creditCardModel = require('../models/creditCardModel');

const validateNumero = async (req, res, next) => {
    const {body} = req;
    
    if (body.numero === undefined){
        return res.status(400).json({message:'The field "numero" is required'});
    }
    
    if (body.numero === ""){
        return res.status(400).json({message:'The field "numero" cannot be empty'});
    }

    next();
};

const validateNomeTitular = async (req, res, next) => {
    const {body} = req;

    if (body.nomeTitular === undefined){
        return res.status(400).json({message:'The field "nomeTitular" is required'});
    }
    
    if (body.nomeTitular === ""){
        return res.status(400).json({message:'The field "nomeTitular" cannot be empty'});
    }
        
    next();
};

const validateValidade = async (req, res, next) => {
    const {body} = req;
    
    if (body.validade === undefined){
        return res.status(400).json({message:'The field "validade" is required'});
    }
    
    if (body.validade === ""){
        return res.status(400).json({message:'The field "validade" cannot be empty'});
    }

    next();
};

const validateBandeira = async (req, res, next) => {
    const {body} = req;
    
    if (body.bandeira === undefined){
        return res.status(400).json({message:'The field "bandeira" is required'});
    }
    
    if (body.bandeira === ""){
        return res.status(400).json({message:'The field "bandeira" cannot be empty'});
    }

    next();
};

const validateCliente = async (req, res, next) => {
    const {body} = req;
    
    if (body.cpfCliente === undefined){
        return res.status(400).json({message:'The field "cpfCliente" is required'});
    }
    
    if (body.cpfCliente === ""){
        return res.status(400).json({message:'The field "cpfCliente" cannot be empty'});
    }

    const readClient = await clientModel.readClient(body);
    if(readClient.length == 0){
        return res.status(400).json({message:'This client doesnt exists'});
    }

    next();
};

const validateCartao = async (req, res, next) => {
    const {body} = req;
    
    const readCreditCard = await creditCardModel.readCreditCard(body);
    if(readCreditCard.length > 0){
        return res.status(400).json({message:'This credit card already registered to this client'});
    }

    next();
};

module.exports = {
    validateNumero,
    validateNomeTitular,
    validateValidade,
    validateBandeira,
    validateCliente,
    validateCartao
};