const clientModel = require('../models/clientModel');
const addressClientModel = require('../models/addressClientModel');

const validateEndereco = async (req, res, next) => {
    const {body} = req;
    
    if (body.endereco === undefined){
        return res.status(400).json({message:'The field "endereco" is required'});
    }
    
    if (body.endereco === ""){
        return res.status(400).json({message:'The field "endereco" cannot be empty'});
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

    if (body.cpfCliente.length == 11){
        return res.status(400).json({message:'The length of field "cpfCliente" has to 11'});
    }

    next();
};

const validateEnderecoCliente = async (req, res, next) => {
    const {body} = req;
    
    const readAddress = await addressClientModel.readClient(body);
    if(readAddress.length > 0){
        return res.status(400).json({message:'This address already exists for this client'});
    }

    next();
};

module.exports = {
    validateEndereco,
    validateCliente,
    validateEnderecoCliente
};