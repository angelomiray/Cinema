const connection = require('./connection');

const getAll = async() => {
    const [users] = await connection.execute('SELECT * FROM Usuario');
    return users;
};

const getById = async(id) => {
    const [user] = await connection.execute('SELECT * FROM Usuario WHERE idUser = ?', [id]);
    return user;
};

const createUser = async(usuario) => {
    const {user, senha, adm, idCinema, idCliente} = usuario;
    const [createdUser] = await connection.execute('INSERT INTO Usuario(user, senha, adm, idCinema, idCliente) VALUES (?, md5(concat(?,"imddw")), ?, ?, ?)', [user, senha, adm, idCinema, idCliente]);
    return createdUser;
};

const deleteUser = async (id) => {
    const [removedUser] = await connection.execute('DELETE FROM Usuario WHERE idUser = ?', [id]);
    return removedUser;
};

const readUser = async (usuario) => {
    const [readUser] = await connection.execute('SELECT * FROM Usuario WHERE user = ?', [usuario.user]);
    return readUser;
};

const readUserById = async (usuario) => {
    const [readUser] = await connection.execute('SELECT * FROM Usuario WHERE idUser = ?', [usuario.idUser]);
    return readUser;
};

const updateUser = async (id, usuario) => {
    const {user, senha, adm, idCinema, idCliente} = usuario;
    const [updatedUser] = await connection.execute('UPDATE Usuario SET user = ?, senha = md5(concat(?,"imddw")), adm = ?, idCinema = ?, idCliente = ? WHERE idUser = ?', [user, senha, adm, idCinema, idCliente, id]);
    return updatedUser;
};

module.exports = {
    getAll,
    getById,
    createUser,
    deleteUser,
    readUser,
    readUserById,
    updateUser
};