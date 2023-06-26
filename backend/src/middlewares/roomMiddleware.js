const cinemaModel = require('../models/cinemaModel');
const roomModel = require('../models/roomModel');

const validateNumero = async (req, res, next) => {
    const {body} = req;
    
    if (body.numero === undefined){
        return res.status(400).json({message:'The field "numero" is required'});
    }
    
    if (body.numero === ""){
        return res.status(400).json({message:'The field "numero" cannot be empty'});
    }
    
    if (body.numero < 1){
        return res.status(400).json({message:'The minimal room number is 1'});
    }

    next();
};

const validateTipo = async (req, res, next) => {
    const {body} = req;

    if (body.tipo === undefined){
        return res.status(400).json({message:'The field "tipo" is required'});
    }
    
    if (body.tipo === ""){
        return res.status(400).json({message:'The field "tipo" cannot be empty'});
    }
        
    next();
};

const validateCapacidade = async (req, res, next) => {
    const {body} = req;
    
    if (body.capacidade === undefined){
        return res.status(400).json({message:'The field "capacidade" is required'});
    }
    
    if (body.capacidade === ""){
        return res.status(400).json({message:'The field "capacidade" cannot be empty'});
    }
    
    if (body.capacidade < 1){
        return res.status(400).json({message:'The minimal room capacity is 1'});
    }

    next();
};

const validateCinema = async (req, res, next) => {
    const {body} = req;
    
    const readCinema = await cinemaModel.readCinemaById(body);
    if(readCinema.length == 0){
        return res.status(400).json({message:'This cinema doesnt exists'});
    }
    
    next();
};

const validateSala = async (req, res, next) => {
    const {body} = req;
    
    const readRoom = await roomModel.readRoom(body);
    if(readRoom.length > 0){
        return res.status(400).json({message:'This room already exists'});
    }

    next();
};

module.exports = {
    validateNumero,
    validateTipo,
    validateCapacidade,
    validateCinema,
    validateSala
};