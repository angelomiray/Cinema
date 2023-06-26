const movieModel = require('../models/movieModel');
const sessionModel = require('../models/sessionModel');
const languageModel = require('../models/languageModel');
const roomModel = require('../models/roomModel');

const validateIdiomaLegenda = async (req, res, next) => {
    const {body} = req;
    
    if(!(body.idiomaLegenda === undefined) && !(body.idiomaLegenda === "")){
        const readLanguage = await languageModel.readLanguageById(body);
        if(readLanguage.length == 0){
            return res.status(400).json({message:'This language doesnt exists'});
        }
    }

    next();
};

const validateIdiomaDublagem = async (req, res, next) => {
    const {body} = req;

    if (body.idiomaDublagem === undefined){
        return res.status(400).json({message:'The field "idiomaDublagem" is required'});
    }
    
    if (body.idiomaDublagem === ""){
        return res.status(400).json({message:'The field "idiomaDublagem" cannot be empty'});
    }

    const readLanguage = await languageModel.readLanguageById(body);
    if(readLanguage.length == 0){
        return res.status(400).json({message:'This language doesnt exists'});
    }
    
    next();
};

const validateDataHoraInicio = async (req, res, next) => {
    const {body} = req;
    
    if (body.dataHoraInicio === undefined){
        return res.status(400).json({message:'The field "dataHoraInicio" is required'});
    }
    
    if (body.dataHoraInicio === ""){
        return res.status(400).json({message:'The field "dataHoraInicio" cannot be empty'});
    }

    next();
};

const validateFilme = async (req, res, next) => {
    const {body} = req;
    
    if (body.filme === undefined){
        return res.status(400).json({message:'The field "filme" is required'});
    }
    
    if (body.filme === ""){
        return res.status(400).json({message:'The field "filme" cannot be empty'});
    }
    
    const readMovie = await movieModel.readMovieById(body);
    if(readMovie.length == 0){
        return res.status(400).json({message:'This movie doesnt exists'});
    }
    
    next();
};

const validateSala = async (req, res, next) => {
    const {body} = req;

    if (body.sala === undefined){
        return res.status(400).json({message:'The field "sala" is required'});
    }
    
    if (body.sala === ""){
        return res.status(400).json({message:'The field "sala" cannot be empty'});
    }
    
    const readRoom = await roomModel.readRoomById(body);
    if(readRoom.length == 0){
        return res.status(400).json({message:'This room doesnt exists'});
    }

    next();
};

const validateSessao = async (req, res, next) => {
    const {body} = req;
    
    const readSession = await sessionModel.readSession(body);
    if(readSession.length > 0){
        return res.status(400).json({message:'This room is already occupied'});
    }

    next();
};

module.exports = {
    validateIdiomaLegenda,
    validateIdiomaDublagem,
    validateDataHoraInicio,
    validateFilme,
    validateSala,
    validateSessao
};