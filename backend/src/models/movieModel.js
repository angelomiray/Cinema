const connection = require('./connection');

const getAll = async() => {
    const [movies] = await connection.execute('SELECT * FROM Filme');
    return movies;
};

const getById = async(id) => {
    const [movie] = await connection.execute('SELECT * FROM Filme WHERE idFilme = ?', [id]);
    return movie;
}

const createMovie = async(filme) => {
    const {titulo, diretor, genero, classificacaoIndicativa, duracao, sinopse, copyrights, ano} = filme;
    const [createdFilme] = await connection.execute('INSERT INTO Filme(titulo, diretor, genero, classificacaoIndicativa, duracao, sinopse, copyrights, ano) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [titulo, diretor, genero, classificacaoIndicativa, duracao, sinopse, copyrights, ano]);
    return createdFilme;
};

const deleteMovie = async (id) => {
    const [removedFilme] = await connection.execute('DELETE FROM Filme WHERE idFilme = ?', [id]);
    return removedFilme;
};

const readMovie = async (filme) => {
    const [readMovie] = await connection.execute('SELECT * FROM Filme WHERE titulo = ? AND ano = ?', [filme.titulo, filme.ano]);
    return readMovie;
};

const readMovieById = async (filme) => {
    const [readMovie] = await connection.execute('SELECT * FROM Filme WHERE idFilme = ?', [filme.idFilme]);
    return readMovie;
};

const updateMovie = async (id, filme) => {
    const {titulo, diretor, genero, classificacaoIndicativa, duracao, sinopse, copyrights, ano} = filme;
    const [updatedFilme] = await connection.execute('UPDATE Filme SET titulo = ?, diretor = ?, genero = ?, classificacaoIndicativa = ?, duracao = ?, sinopse = ?, copyrights = ?, ano = ? WHERE idFilme = ?', [titulo, diretor, genero, classificacaoIndicativa, duracao, sinopse, copyrights, ano, id]);
    return updatedFilme;
};

module.exports = {
    getAll,
    getById,
    createMovie,
    deleteMovie,
    readMovie,
    readMovieById,
    updateMovie
};