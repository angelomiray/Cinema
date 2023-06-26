const movieModel = require('../models/movieModel');

const validateTitulo = async (req, res, next) => {
    const {body} = req;
    
    if (body.titulo === undefined){
        return res.status(400).json({message:'The field "titulo" is required'});
    }
    
    if (body.titulo === ""){
        return res.status(400).json({message:'The field "titulo" cannot be empty'});
    }1

    next();
};

const validateDiretor = async (req, res, next) => {
    const {body} = req;

    if (body.diretor === undefined){
        return res.status(400).json({message:'The field "diretor" is required'});
    }
    
    if (body.diretor === ""){
        return res.status(400).json({message:'The field "diretor" cannot be empty'});
    }
        
    next();
};

const validateGenero = async (req, res, next) => {
    const {body} = req;
    
    if (body.genero === undefined){
        return res.status(400).json({message:'The field "genero" is required'});
    }
    
    if (body.genero === ""){
        return res.status(400).json({message:'The field "genero" cannot be empty'});
    }

    next();
};

const validateClassificacaoIndicativa = async (req, res, next) => {
    const {body} = req;
    
    if (body.classificacaoIndicativa === undefined){
        return res.status(400).json({message:'The field "classificacaoIndicativa" is required'});
    }
    
    if (body.classificacaoIndicativa === ""){
        return res.status(400).json({message:'The field "classificacaoIndicativa" cannot be empty'});
    }

    next();
};

const validateDuracao = async (req, res, next) => {
    const {body} = req;
    
    if (body.duracao === undefined){
        return res.status(400).json({message:'The field "duracao" is required'});
    }
    
    if (body.duracao === ""){
        return res.status(400).json({message:'The field "duracao" cannot be empty'});
    }

    next();
};

const validateSinopse = async (req, res, next) => {
    const {body} = req;
    
    if (body.sinopse === undefined){
        return res.status(400).json({message:'The field "sinopse" is required'});
    }
    
    if (body.sinopse === ""){
        return res.status(400).json({message:'The field "sinopse" cannot be empty'});
    }

    next();
};

const validateCopyrights = async (req, res, next) => {
    const {body} = req;
    
    if (body.copyrights === undefined){
        return res.status(400).json({message:'The field "copyrights" is required'});
    }
    
    if (body.copyrights === ""){
        return res.status(400).json({message:'The field "copyrights" cannot be empty'});
    }

    next();
};

const validateAno = async (req, res, next) => {
    const {body} = req;
    
    if (body.ano === undefined){
        return res.status(400).json({message:'The field "ano" is required'});
    }
    
    if (body.ano === ""){
        return res.status(400).json({message:'The field "ano" cannot be empty'});
    }
    
    if (body.ano < 0){
        return res.status(400).json({message:'Cinema isnt so old'});
    }

    next();
};

const validateFilme = async (req, res, next) => {
    const {body} = req;
    
    const readMovie = await movieModel.readMovie(body);
    if(readRoom.length > 0){
        return res.status(400).json({message:'This room already exists'});
    }

    next();
};

module.exports = {
    validateTitulo,
    validateDiretor,
    validateGenero,
    validateClassificacaoIndicativa,
    validateDuracao,
    validateSinopse,
    validateCopyrights,
    validateAno,
    validateFilme
};