const connection = require('./connection');
const movieModel = require('./movieModel');

const getAll = async() => {
    const [sessions] = await connection.execute('SELECT * FROM Sessao');
    return sessions;
};

const getById = async(id) => {
    const [session] = await connection.execute('SELECT * FROM Sessao WHERE idSessao = ?', [id]);
    return session;
};

const createSession = async(sessao) => {
    const {idiomaLegenda, idiomaDublagem, inicio, idFilme, idSala} = sessao;
    const duracaoInMs = movieModel.getById(idFilme).duracao * 60 * 1000;
    const dataHoraInicio = new Date(inicio).toLocaleString;
    const dataHoraFim = new Date(Date.parse(inicio) + duracaoInMs).toLocaleString;
    const [createdSession] = await connection.execute('INSERT INTO Sessao(idiomaLegenda, idiomaDublagem, dataHoraInicio, dataHoraFim, idFilme, idSala) VALUES (?, ?, ?, ?, ?, ?)', [idiomaLegenda, idiomaDublagem, dataHoraInicio, dataHoraFim, idFilme, idSala]);
    return createdSession;
};

const deleteSession = async (id) => {
    const [removedSession] = await connection.execute('DELETE FROM Sessao WHERE idSessao = ?', [id]);
    return removedSession;
};

const readSession = async (sessao) => {
    const [readSession] = await connection.execute('SELECT * FROM Sessao WHERE dataHoraInicio = ? AND idSala = ?', [sessao.dataHoraInicio, sessao.idSala]);
    return readSession;
};

const readSessionById = async (sessao) => {
    const [readSession] = await connection.execute('SELECT * FROM Sessao WHERE idSessao = ?', [sessao.idSessao]);
    return readSession;
};

const updateSession = async (id, sessao) => {
    const {idiomaLegenda, idiomaDublagem, inicio, idFilme, idSala} = sessao;
    const duracaoInMs = movieModel.getById(idFilme).duracao * 60 * 1000;
    const dataHoraInicio = new Date(inicio).toLocaleString;
    const dataHoraFim = new Date(Date.parse(inicio) + duracaoInMs).toLocaleString;
    const [updatedSession] = await connection.execute('UPDATE Sessao SET idiomaLegenda = ?, idiomaDublagem = ?, dataHoraInicio = ?, dataHoraFim = ?, idFilme = ?, idSala = ? WHERE idSessao = ?', [idiomaLegenda, idiomaDublagem, dataHoraInicio, dataHoraFim, idFilme, idSala, id]);
    return updatedSession;
};

module.exports = {
    getAll,
    getById,
    createSession,
    deleteSession,
    readSession,
    readSessionById,
    updateSession
};