const connection = require('./connection');

const getAll = async() => {
    const [languages] = await connection.execute('SELECT * FROM Idioma');
    return languages;
};

const getById = async(id) => {
    const [language] = await connection.execute('SELECT * FROM Idioma WHERE idIdioma = ?', [id]);
    return language;
}

const createLanguage = async(language) => {
    const {idioma} = language;
    const [createdLanguage] = await connection.execute('INSERT INTO Idioma(idioma) VALUES (?)', [idioma]);
    return createdLanguage;
};

const deleteLanguage = async (id) => {
    const [removedLanguage] = await connection.execute('DELETE FROM Idioma WHERE idIdioma = ?', [id]);
    return removedLanguage;
};

const readLanguage = async (language) => {
    const [readLanguage] = await connection.execute('SELECT * FROM Idioma WHERE idioma = ?', [language.idioma]);
    return readLanguage;
};

const readLanguageById = async (language) => {
    const [readLanguage] = await connection.execute('SELECT * FROM Idioma WHERE idIdioma = ?', [language.idIdioma]);
    return readLanguage;
};

const updateLanguage = async (id, language) => {
    const {idioma} = language;
    const [updatedLanguage] = await connection.execute('UPDATE Idioma SET idioma = ? WHERE idIdioma = ?', [idioma, id]);
    return updatedLanguage;
};

module.exports = {
    getAll,
    getById,
    createLanguage,
    deleteLanguage,
    readLanguage,
    readLanguageById,
    updateLanguage
};