const connection = require('./connection');

const getAll = async() => {
    const [clients] = await connection.execute('SELECT * FROM Cliente');
    return clients;
};

const getById = async(id) => {
    const [client] = await connection.execute('SELECT * FROM Cliente WHERE cpf = ?', [id]);
    return client;
}

const createClient = async(client) => {
    const {nome, dataNascimento, email, telefone} = client;
    const [createdClient] = await connection.execute('INSERT INTO Cliente(nome, dataNascimento, email, telefone) VALUES (?, ?, ?, ?)', [nome, dataNascimento, email, telefone]);
    return createdClient;
};

const deleteClient = async (id) => {
    const [removedClient] = await connection.execute('DELETE FROM Cliente WHERE cpf = ?', [id]);
    return removedClient;
};

const readClient = async (client) => {
    const [readClient] = await connection.execute('SELECT * FROM Cliente WHERE cpf = ?', [client.cpf]);
    return readClient;
};

const updateClient = async (id, client) => {
    const {nome, dataNascimento, email, telefone} = client;
    const [updatedClient] = await connection.execute('UPDATE Cliente SET nome = ?, dataNascimento = ?, email = ?, telefone = ? WHERE cpf = ?', [nome, dataNascimento, email, telefone, id]);
    return updatedClient;
};

module.exports = {
    getAll,
    getById,
    createClient,
    deleteClient,
    readClient,
    updateClient
};