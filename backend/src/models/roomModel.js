const connection = require('./connection');

const getAll = async() => {
    const [rooms] = await connection.execute('SELECT * FROM Sala');
    return rooms;
};

const getById = async(id) => {
    const [room] = await connection.execute('SELECT * FROM Sala WHERE idSala = ?', [id]);
    return room;
};

const createRoom = async(sala) => {
    const {numero, tipo, capacidade, idCinema} = sala;
    const [createdRoom] = await connection.execute('INSERT INTO Sala(numero, tipo, capacidade, idCinema) VALUES (?, ?, ?, ?)', [numero, tipo, capacidade, idCinema]);
    return createdRoom;
};

const deleteRoom = async (id) => {
    const [removedRoom] = await connection.execute('DELETE FROM Sala WHERE idSala = ?', [id]);
    return removedRoom;
};

const readRoom = async (sala) => {
    const [readRoom] = await connection.execute('SELECT * FROM Sala WHERE numero = ? AND idCinema = ?', [sala.numero, sala.idCinema]);
    return readRoom;
};

const readRoomById = async (sala) => {
    const [readRoom] = await connection.execute('SELECT * FROM Sala WHERE idSala = ?', [sala.idSala]);
    return readRoom;
};

const updateRoom = async (id, sala) => {
    const {numero, tipo, capacidade, idCinema} = sala;
    const [updatedRoom] = await connection.execute('UPDATE Sala SET numero = ?, tipo = ?, capacidade = ?, idCinema = ? WHERE idSala = ?', [numero, tipo, capacidade, idCinema, id]);
    return updatedRoom;
};

module.exports = {
    getAll,
    getById,
    createRoom,
    deleteRoom,
    readRoom,
    readRoomById,
    updateRoom
};