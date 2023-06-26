const cinemaModel = require('../models/cinemaModel');

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

const validateRua = async (req, res, next) => {
    const {body} = req;

    if (body.rua === undefined){
        return res.status(400).json({message:'The field "rua" is required'});
    }
    
    if (body.rua === ""){
        return res.status(400).json({message:'The field "rua" cannot be empty'});
    }
        
    next();
};

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

const validateCidade = async (req, res, next) => {
    const {body} = req;
    
    if (body.cidade === undefined){
        return res.status(400).json({message:'The field "cidade" is required'});
    }
    
    if (body.cidade === ""){
        return res.status(400).json({message:'The field "cidade" cannot be empty'});
    }

    next();
};

const validateEstado = async (req, res, next) => {
    const {body} = req;
    
    if (body.estado === undefined){
        return res.status(400).json({message:'The field "estado" is required'});
    }
    
    if (body.estado === ""){
        return res.status(400).json({message:'The field "estado" cannot be empty'});
    }

    if ((body.estado.length > 2) && (body.estado.length < 2)){
        return res.status(400).json({message:'The length of field "estado" has to 2'});
    }

    next();
};

const validateCinema = async (req, res, next) => {
    const {body} = req;
    
    const readCinema = await cinemaModel.readClient(body);
    if(readCinema.length > 0){
        return res.status(400).json({message:'This cinema already exists'});
    }

    next();
};

module.exports = {
    validateNome,
    validateRua,
    validateNumero,
    validateCidade,
    validateEstado,
    validateCinema
};