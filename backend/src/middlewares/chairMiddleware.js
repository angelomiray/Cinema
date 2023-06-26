const roomModel = require('../models/roomModel');
const chairModel = require('../models/chairModel');

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

const validatePosicaoX = async (req, res, next) => {
    const {body} = req;

    if (body.posicaoX === undefined){
        return res.status(400).json({message:'The field "posicaoX" is required'});
    }
    
    if (body.posicaoX === ""){
        return res.status(400).json({message:'The field "posicaoX" cannot be empty'});
    }
        
    next();
};

const validatePosicaoY = async (req, res, next) => {
    const {body} = req;
    
    if (body.posicaoY === undefined){
        return res.status(400).json({message:'The field "posicaoY" is required'});
    }
    
    if (body.posicaoY === ""){
        return res.status(400).json({message:'The field "posicaoY" cannot be empty'});
    }

    next();
};

const validateSala = async (req, res, next) => {
    const {body} = req;
    
    if (body.idSala === undefined){
        return res.status(400).json({message:'The field "idSala" is required'});
    }
    
    if (body.idSala === ""){
        return res.status(400).json({message:'The field "idSala" cannot be empty'});
    }

    const readRoom = await roomModel.readRoomById(body);
    if(readRoom.length == 0){
        return res.status(400).json({message:'This room doesnt exists'});
    }

    next();
};

const validateCadeira = async (req, res, next) => {
    const {body} = req;
    
    const readChair = await chairModel.readChair(body);
    if(readChair.length > 0){
        return res.status(400).json({message:'This chair already exists'});
    }

    next();
};

module.exports = {
    validateTipo,
    validatePosicaoX,
    validatePosicaoY,
    validateSala,
    validateCadeira
};