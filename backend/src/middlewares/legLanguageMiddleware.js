const movieModel = require('../models/movieModel');
const languageModel = require('../models/languageModel');
const legLanguageModel = require('../models/legLanguageModel');

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

const validateIdioma = async (req, res, next) => {
    const {body} = req;

    if (body.idioma === undefined){
        return res.status(400).json({message:'The field "idioma" is required'});
    }
    
    if (body.idioma === ""){
        return res.status(400).json({message:'The field "idioma" cannot be empty'});
    }
    
    const readLanguage = await languageModel.readLanguageById(body);
    if(readLanguage.length == 0){
        return res.status(400).json({message:'This language doesnt exists for this movie'});
    }

    next();
};

const validateIdiomaLeg = async (req, res, next) => {
    const {body} = req;
    
    const readLegLanguage = await legLanguageModel.readLegLanguage(body);
    if(readLegLanguage.length > 0){
        return res.status(400).json({message:'This subtitle language already exists'});
    }

    next();
};

module.exports = {
    validateFilme,
    validateIdioma,
    validateIdiomaLeg
};