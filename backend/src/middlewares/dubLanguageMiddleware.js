const movieModel = require('../models/movieModel');
const languageModel = require('../models/languageModel');
const dubLanguageModel = require('../models/dubLanguageModel');

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
        return res.status(400).json({message:'This language doesnt exists'});
    }

    next();
};

const validateNativa = (req, res, next) => {
    const {body} = req;
    
    if (body.nativa === undefined){
        return res.status(400).json({message:'The field "nativa" is required'});
    }
    
    if (body.nativa === ""){
        return res.status(400).json({message:'The field "nativa" cannot be empty'});
    }

    if (!((body.nativa == 0) || (body.nativa == 1))){
        return res.status(400).json({message:'The field "nativa" only accepts value 0 or 1'});
    }
    
    next();
}

const validateIdiomaDub = async (req, res, next) => {
    const {body} = req;
    
    const readDubLanguage = await dubLanguageModel.readDubLanguage(body);
    if(readDubLanguage.length > 0){
        return res.status(400).json({message:'This voice language already exists for this movie'});
    }

    next();
};

module.exports = {
    validateFilme,
    validateIdioma,
    validateNativa,
    validateIdiomaDub
};