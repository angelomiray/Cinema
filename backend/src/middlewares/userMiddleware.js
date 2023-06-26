//O middleware é responsável pela validação do json enviado via requisição
const userModel = require('../models/userModel');

const validateUser = async (req, res, next) => {
    const {body} = req;
    
    if (body.user === undefined){
        return res.status(400).json({message:'The field "user" is required'});
    }
    
    if (body.user === ""){
        return res.status(400).json({message:'The field "user" cannot be empty'});
    }
    
    const readUser = await userModel.readUser(body);
    if (readUser.length > 0){
        return res.status(400).json({message:'This username is already in use'});
    }

    next();
}

const validatePassword = (req, res, next) => {
    const {body} = req;
    
    if (body.senha === undefined){
        return res.status(400).json({message:'The field "senha" is required'});
    }
    
    if (body.senha === ""){
        return res.status(400).json({message:'The field "senha" cannot be empty'});
    }

    next();
}

const validateAdm = (req, res, next) => {
    const {body} = req;
    
    if (body.adm === undefined){
        return res.status(400).json({message:'The field "adm" is required'});
    }
    
    if (body.adm === ""){
        return res.status(400).json({message:'The field "adm" cannot be empty'});
    }

    if (!((body.adm == 0) || (body.adm == 1))){
        return res.status(400).json({message:'The field "adm" only accepts value 0 or 1'});
    }
    
    next();
}

const validateFk = (req, res, next) => {
    const {body} = req;
    
    if (body.adm === 1){
        if (body.idCinema === undefined){
            return res.status(400).json({message:'The field "idCinema" is required for administrators'});
        }
        
        if (body.idCinema === ""){
            return res.status(400).json({message:'The field "idCinema" cannot be empty for administrators'});
        }
    }
    else{
        if (body.idCliente === undefined){
            return res.status(400).json({message:'The field "idCliente" is required for customers users'});
        }
        
        if (body.idCliente === ""){
            return res.status(400).json({message:'The field "idCliente" cannot be empty for customers users'});
        }
    }

    next();
}

module.exports = {
    validateUser,
    validatePassword,
    validateAdm,
    validateFk
};