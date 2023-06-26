const connection = require('./connection');

const getAll = async() => {
    const [enderecos] = await connection.execute('SELECT * FROM EnderecoCliente');
    return enderecos;
};

const getById = async(id) => {
    const [endereco] = await connection.execute('SELECT * FROM EnderecoCliente WHERE idEndereco = ?', [id]);
    return endereco;
};

const createAddressClient = async(address) => {
    const {endereco, cpfCliente} = address;
    const [createdAddressClient] = await connection.execute('INSERT INTO EnderecoCliente(endereco, cpfCliente) VALUES (?, ?)', [endereco, cpfCliente]);
    return createdAddressClient;
};

const deleteAddressClient = async (id) => {
    const [removedAddressClient] = await connection.execute('DELETE FROM EnderecoCliente WHERE endereco = ? AND idEndereco = ?', [id]);
    return removedAddressClient;
};

const readAddressClient = async (address) => {
    const [readAddressClient] = await connection.execute('SELECT * FROM EnderecoCliente WHERE endereco = ? AND cpfCliente = ?', [address.endereco, address.cpfCliente]);
    return readAddressClient;
};

const readAddressClientById = async (address) => {
    const [readAddressClient] = await connection.execute('SELECT * FROM EnderecoCliente WHERE idEndereco = ?', [address.idEndereco]);
    return readAddressClient;
};

const updateAddressClient = async (id, address) => {
    const {endereco, cpfCliente} = address;
    const [updatedAddressClient] = await connection.execute('UPDATE Usuario SET endereco = ?, cpfCliente = ? WHERE idEndereco = ?', [endereco, cpfCliente, id]);
    return updatedAddressClient;
};

module.exports = {
    getAll,
    getById,
    createAddressClient,
    deleteAddressClient,
    readAddressClient,
    readAddressClientById,
    updateAddressClient
};