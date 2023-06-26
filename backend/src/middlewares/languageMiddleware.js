const languageModel = require('../models/languageModel');

const validateIdioma = async (req, res, next) => {
    const {body} = req;

    if (body.idioma === undefined){
        return res.status(400).json({message:'The field "idioma" is required'});
    }
    
    if (body.idioma === ""){
        return res.status(400).json({message:'The field "idioma" cannot be empty'});
    }
    
    const readLanguage = await languageModel.readLanguage(body);
    if(readLanguage.length > 0){
        return res.status(400).json({message:'This language already exists for this movie'});
    }

    next();
};

module.exports = {
    validateIdioma
};