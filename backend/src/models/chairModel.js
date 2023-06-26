const connection = require('./connection');

const getAll = async() => {
    const [chairs] = await connection.execute('SELECT * FROM Cadeira');
    return chairs;
};

const getById = async(id) => {
    const [chair] = await connection.execute('SELECT * FROM Cadeira WHERE idCadeira = ?', [id]);
    return chair;
};

const createChair = async(cadeira) => {
    const {tipo, posicaoX, poiscaoY, idSala} = cadeira;
    const [createdChair] = await connection.execute('INSERT INTO Cadeira(tipo, posicaoX, posicaoY, idSala) VALUES (?, ?, ?, ?)', [tipo, posicaoX, poiscaoY, idSala]);
    return createdChair;
};

const readChair = async (cadeira) => {
    const [readChair] = await connection.execute('SELECT * FROM Cadeira WHERE posicaoX = ? AND posicaoY = ? AND idSala = ?', [cadeira.posicaoX, cadeira.poiscaoY, cadeira.idSala]);
    return readChair;
};

const readChairById = async (cadeira) => {
    const [readChair] = await connection.execute('SELECT * FROM Cadeira WHERE idCadeira = ?', [cadeira.idCadeira]);
    return readChair;
};

const deleteChair = async(id) => {
    const [removedChair] = await connection.execute('DELETE FROM Cadeira WHERE idCadeira = ?', [id]);
}

const updateChair = async (id, cadeira) => {
    const {tipo, posicaoX, poiscaoY, idSala} = cadeira;
    const [updatedChair] = await connection.execute('UPDATE Cadeira SET tipo = ?, posicaoX = ?, posicaoY = ?, idSala = ? WHERE idCadeira = ?', [tipo, posicaoX, poiscaoY, idSala, id]);
    return updatedChair;
};

module.exports = {
    getAll,
    getById,
    createChair,
    readChair,
    readChairById,
    deleteChair,
    updateChair
};