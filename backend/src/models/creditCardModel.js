const connection = require('./connection');

const getAll = async() => {
    const [cards] = await connection.execute('SELECT * FROM Cartao');
    return cards;
};

const getById = async(id) => {
    const [card] = await connection.execute('SELECT * FROM Cartao WHERE idCartao = ?', [id]);
    return card;
}

const createCreditCard = async(card) => {
    const {numero, nomeTitular, validade, bandeira, cpfCliente} = card;
    const [createdCreditCard] = await connection.execute('INSERT INTO Cartao(numero, nomeTitular, validade, bandeira, cpfCliente) VALUES (?, ?, ?, ?, ?)', [numero, nomeTitular, validade, bandeira, cpfCliente]);
    return createdCreditCard;
};

const deleteCreditCard = async (id) => {
    const [removedCreditCard] = await connection.execute('DELETE FROM Cartao WHERE idCartao = ?', [id]);
    return removedCreditCard;
};

const readCreditCard = async (card) => {
    const [readCreditCard] = await connection.execute('SELECT * FROM Cartao WHERE numero = ? AND cpfCliente = ?', [card.numero, card.cpfCliente]);
    return readCreditCard;
};

const readCreditCardById = async (card) => {
    const [readCreditCard] = await connection.execute('SELECT * FROM Cartao WHERE idCartao = ?', [card.idCartao]);
    return readCreditCard;
};

const updateCreditCard = async (id, card) => {
    const {numero, nomeTitular, validade, bandeira, cpfCliente} = card;
    const [updatedCreditCard] = await connection.execute('UPDATE Cartao SET numero = ?, nomeTitular = ?, validade = ?, bandeira = ?, cpfCliente = ? WHERE idCartao = ?', [numero, nomeTitular, validade, bandeira, cpfCliente, id]);
    return updatedCreditCard;
};

module.exports = {
    getAll,
    getById,
    createCreditCard,
    deleteCreditCard,
    readCreditCard,
    readCreditCardById,
    updateCreditCard
};