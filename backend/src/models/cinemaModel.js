const connection = require('./connection');

const getAll = async() => {
    const [cinemas] = await connection.execute('SELECT * FROM Cinema');
    return cinemas;
};

const getById = async(id) => {
    const [cinema] = await connection.execute('SELECT * FROM Cinema WHERE idCinema = ?', [id]);
    return cinema;
};

const createCinema = async(cinema) => {
    const {nome, rua, numero, cidade, estado} = cinema;
    const [createdCinema] = await connection.execute('INSERT INTO Cinema(nome, rua, numero, cidade, estado) VALUES (?, ?, ?, ?, ?)', [nome, rua, numero, cidade, estado]);
    return createdCinema;
};

const deleteCinema = async (id) => {
    const [removedCinema] = await connection.execute('DELETE FROM Cinema WHERE idCinema = ?', [id]);
    return removedCinema;
};

const readCinema = async (cinema) => {
    const [readCinema] = await connection.execute('SELECT * FROM Cinema WHERE nome = ? AND rua = ? AND numero = ? AND cidade = ? AND estado = ?', [cinema.nome, cinema.rua, cinema.numero, cinema.cidade, cinema.estado]);
    return readCinema;
};

const readCinemaById = async (cinema) => {
    const [readCinema] = await connection.execute('SELECT * FROM Cinema WHERE idCinema = ?', [cinema.idCinema]);
    return readCinema;
};

const updateCinema = async (id, cinema) => {
    const {nome, rua, numero, cidade, estado} = cinema;
    const [updatedCinema] = await connection.execute('UPDATE Cinema SET nome = ?, rua = ?, numero = ?, cidade = ?, estado = ? WHERE idCinema = ?', [nome, rua, numero, cidade, estado, id]);
    return updatedCinema;
};

module.exports = {
    getAll,
    getById,
    createCinema,
    deleteCinema,
    readCinema,
    readCinemaById,
    updateCinema
};