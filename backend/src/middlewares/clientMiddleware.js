const clientModel = require('../models/clientModel');

const validateCpf = async (req, res, next) => {
    const {body} = req;
    
    if (body.cpf === undefined){
        return res.status(400).json({message:'The field "cpf" is required'});
    }
    
    if (body.cpf === ""){
        return res.status(400).json({message:'The field "cpf" cannot be empty'});
    }

    next();
};

const validateNome = async (req, res, next) => {
    const {body} = req;

    if (body.nome === undefined){
        return res.status(400).json({message:'The field "nome" is required'});
    }
    
    if (body.nome === ""){
        return res.status(400).json({message:'The field "nome" cannot be empty'});
    }
        
    next();
};

const validateDataNascimento = async (req, res, next) => {
    const {body} = req;
    
    if (body.dataNascimento === undefined){
        return res.status(400).json({message:'The field "dataNascimento" is required'});
    }
    
    if (body.dataNascimento === ""){
        return res.status(400).json({message:'The field "dataNascimento" cannot be empty'});
    }

    next();
};

const validateEmail = async (req, res, next) => {
    const {body} = req;
    
    if (body.email === undefined){
        return res.status(400).json({message:'The field "email" is required'});
    }
    
    if (body.email === ""){
        return res.status(400).json({message:'The field "email" cannot be empty'});
    }

    next();
};

const validateTelefone = async (req, res, next) => {
    const {body} = req;
    
    if (body.telefone === undefined){
        return res.status(400).json({message:'The field "telefone" is required'});
    }
    
    if (body.telefone === ""){
        return res.status(400).json({message:'The field "telefone" cannot be empty'});
    }

    next();
};

const validateCliente = async (req, res, next) => {
    const {body} = req;
    
    const readClient = await clientModel.readClient(body);
    if(readClient.length > 0){
        return res.status(400).json({message:'This client already registered to this client'});
    }

    next();
};

module.exports = {
    validateCpf,
    validateNome,
    validateDataNascimento,
    validateEmail,
    validateTelefone,
    validateCliente
};