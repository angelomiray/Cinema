const connection = require('./connection');

const getAll = async() => {
    const [tickets] = await connection.execute('SELECT * FROM Ticket');
    return tickets;
};

const getById = async(id) => {
    const [ticket] = await connection.execute('SELECT * FROM Ticket WHERE idTicket = ?', [id]);
    return ticket;
};

const createTicket = async(ticket) => {
    const data = new Date(Date.now()).toLocaleString();
    const {preco, cpfCliente, idSessao, idCadeira} = ticket;
    const [createdTicket] = await connection.execute('INSERT INTO Ticket(preco, dataHora, cpfCliente, idSessao, idCadeira) VALUES (?, ?, ?, ?, ?)', [preco, data, cpfCliente, idSessao, idCadeira]);
    return createdTicket;
};

const deleteTicket = async (id) => {
    const [removedTicket] = await connection.execute('DELETE FROM Ticket WHERE cpfClient = ? AND idSessao = ? AND idCadeira = ? AND idTicket = ?', [client, session, chair, id]);
    return removedTicket;
};

const readTicket = async (ticket) => {
    const [readTicket] = await connection.execute('SELECT * FROM Ticket WHERE idSessao = ? AND idCadeira = ?', [ticket.idSessao, ticket.idCadeira]);
    return readTicket;
};

const readTicketById = async (ticket) => {
    const [readTicket] = await connection.execute('SELECT * FROM Ticket WHERE idTicket = ?', [ticket.idTicket]);
    return readTicket;
};

const updateTicket = async (id, ticket) => {
    const data = new Date(Date.now()).toLocaleString();
    const {preco, cpfCliente, idSessao, idCadeira} = ticket;
    const [updatedTicket] = await connection.execute('UPDATE Ticket SET preco = ?, dataHora = ?, cpfCliente = ?, idSessao = ?, idCadeira = ? WHERE idTicket = ?', [preco, data, cpfCliente, idSessao, idCadeira, id]);
    return updatedTicket;
};

module.exports = {
    getAll,
    getById,
    createTicket,
    deleteTicket,
    readTicket,
    readTicketById,
    updateTicket
};