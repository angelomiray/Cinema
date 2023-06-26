const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');
const ticketController = require('./controllers/ticketController');
const ticketMiddleware = require('./middlewares/ticketMiddleware');
const sessionController = require('./controllers/sessionController');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const roomController = require('./controllers/roomController');
const roomMiddleware = require('./middlewares/roomMiddleware');
const movieController = require('./controllers/movieController');
const movieMiddleware = require('./middlewares/movieMiddleware');
const legLanguageController = require('./controllers/legLanguageController');
const legLanguageMiddleware = require('./middlewares/legLanguageMiddleware');
const languageController = require('./controllers/languageController');
const languageMiddleware = require('./middlewares/languageMiddleware');
const dubLanguageController = require('./controllers/dubLanguageController');
const dubLanguageMiddleware = require('./middlewares/dubLanguageMiddleware');
const creditCardController = require('./controllers/creditCardController');
const creditCardMiddleware = require('./middlewares/creditCardMiddleware');
const clientController = require('./controllers/clientController');
const clientMiddleware = require('./middlewares/clientMiddleware');
const cinemaController = require('./controllers/cinemaController');
const cinemaMiddleware = require('./middlewares/cinemaMiddleware');
const chairController = require('./controllers/chairController');
const chairMiddleware = require('./middlewares/chairMiddleware');
const addressClientController = require('./controllers/addressClientController');
const addressClientMiddleware = require('./middlewares/addressClientMiddleware');

//Rota raiz
router.get('/', function(req, res){
    res.status(200).send('INDEX');
});

router.get('/users', userController.getAll);
router.get('/user', userController.getById);
router.post('/user', userMiddleware.validateUser, userMiddleware.validatePassword, userMiddleware.validateAdm, userMiddleware.validateFk, userController.createUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id', userController.updateUser);

router.get('/tickets', ticketController.getAll);
router.get('/ticket', ticketController.getById);
router.post('/ticket', ticketMiddleware.validatePreco, ticketMiddleware.validateDataHora, ticketMiddleware.validateCpf, ticketMiddleware.validateSessao, ticketMiddleware.validateCadeira, ticketMiddleware.validateTicket, ticketController.createTickets);
router.delete('/ticket/:id', ticketController.deleteTickets);
router.put('/ticket/:id', ticketController.updateTickets);

router.get('/sessions', sessionController.getAll);
router.get('/session', sessionController.getById);
router.post('/session', sessionMiddleware.validateIdiomaLegenda, sessionMiddleware.validateIdiomaDublagem, sessionMiddleware.validateDataHoraInicio, sessionMiddleware.validateFilme, sessionMiddleware.validateSala, sessionMiddleware.validateSessao, sessionController.createSession);
router.delete('/session/:id', sessionController.deleteSession);
router.put('/session/:id', sessionController.updateSession);

router.get('/movies', movieController.getAll);
router.get('/movie', movieController.getById);
router.post('/movie', movieMiddleware.validateTitulo, movieMiddleware.validateDiretor, movieMiddleware.validateGenero, movieMiddleware.validateClassificacaoIndicativa, movieMiddleware.validateDuracao, movieMiddleware.validateSinopse, movieMiddleware.validateCopyrights, movieMiddleware.validateAno, movieMiddleware.validateFilme, movieController.createMovie);
router.delete('/movie/:id', movieController.deleteMovie);
router.put('/movie/:id', movieController.updateMovie);

router.get('/leg-languages', legLanguageController.getAll);
router.get('/leg-language', legLanguageController.getById);
router.post('/leg-language', legLanguageMiddleware.validateFilme, legLanguageMiddleware.validateIdioma, legLanguageMiddleware.validateIdiomaLeg, legLanguageController.createLegLanguage);
router.delete('/leg-language/:id', legLanguageController.deleteLegLanguage);
router.put('/leg-language/:id', legLanguageController.updateLegLanguage);

router.get('/languages', languageController.getAll);
router.get('/language', languageController.getById);
router.post('/language', languageMiddleware.validateIdioma, languageController.createLanguage);
router.delete('/language/:id', languageController.deleteLanguage);
router.put('/language/:id', languageController.updateLanguage);

router.get('dub-languages', dubLanguageController.getAll);
router.get('dub-language', dubLanguageController.getById);
router.post('dub-language', dubLanguageMiddleware.validateFilme, dubLanguageMiddleware.validateIdioma, dubLanguageMiddleware.validateNativa, dubLanguageMiddleware.validateIdiomaDub, dubLanguageController.createDubLanguage);
router.delete('dub-language/:id', dubLanguageController.deleteDubLanguage);
router.put('dub-language/:id', dubLanguageController.updateDubLanguage);

router.get('credit-cards', creditCardController.getAll);
router.get('credit-card', creditCardController.getById);
router.post('credit-card', creditCardMiddleware.validateNumero, creditCardMiddleware.validateNomeTitular, creditCardMiddleware.validateValidade, creditCardMiddleware.validateBandeira, creditCardMiddleware.validateCliente, creditCardMiddleware.validateCartao, creditCardController.createCreditCard);
router.delete('credit-card/:id', creditCardController.deleteCreditCard);
router.put('credit-card/:id', creditCardController.updateCreditCard);

router.get('/clients', clientController.getAll);
router.get('/client', clientController.getById);
router.post('/client', clientMiddleware.validateCpf, clientMiddleware.validateNome, clientMiddleware.validateDataNascimento, clientMiddleware.validateEmail, clientMiddleware.validateTelefone, clientMiddleware.validateCliente, clientController.createClient);
router.delete('/client/:id', clientController.deleteClient);
router.put('/client/:id', clientController.updateClient);

router.get('/chairs', chairController.getAll);
router.get('/chair', chairController.getById);
router.post('/chair', chairMiddleware.validateTipo, chairMiddleware.validatePosicaoX, chairMiddleware.validatePosicaoY, chairMiddleware.validateSala, chairMiddleware.validateCadeira, chairController.createChair);
router.delete('/chair/:id', chairController.deleteChair);
router.put('/chair/:id', chairController.updateChair);

router.get('/cinemas', cinemaController.getAll);
router.get('/cinema', cinemaController.getById);
router.post('/cinema', cinemaMiddleware.validateNome, cinemaMiddleware.validateRua, cinemaMiddleware.validateNumero, cinemaMiddleware.validateCidade, cinemaMiddleware.validateEstado, cinemaMiddleware.validateCinema, cinemaController.createCinema);
router.delete('/cinema/:id', cinemaController.deleteCinema);
router.put('/cinema/:id', cinemaController.updateCinema);

router.get('/address-clients', addressClientController.getAll);
router.get('/address-client', addressClientController.getById);
router.post('/address-client', addressClientMiddleware.validateEndereco, addressClientMiddleware.validateCliente, addressClientMiddleware.validateEnderecoCliente, addressClientController.createAddressClient);
router.delete('/address-client/:id', addressClientController.deleteAddressClient);
router.put('/address-client/:id', addressClientController.updateAddressClient);

module.exports = router;