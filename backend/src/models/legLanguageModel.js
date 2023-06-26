const connection = require('./connection');

const getAll = async() => {
    const [leg_languages] = await connection.execute('SELECT * FROM IdiomaLegenda');
    return leg_languages;
};

const getById = async(Filme_idFilme, Idioma_idIdioma) => {
    const [leg_language] = await connection.execute('SELECT * FROM IdiomaLegenda WHERE Filme_idFilme = ? AND Idioma_idIdioma', [Filme_idFilme, Idioma_idIdioma]);
    return leg_language;
}

const createLegLanguage = async(leg_language) => {
    const {Filme_idFilme, Idioma_idIdioma} = leg_language;
    const [created_leg_language] = await connection.execute('INSERT INTO IdiomaLegenda(Filme_idFilme, Idioma_idIdioma) VALUES (?, ?)', [Filme_idFilme, Idioma_idIdioma]);
    return created_leg_language;
};

const deleteLegLanguage = async (id) => {
    const [removed_leg_language] = await connection.execute('DELETE FROM IdiomaLegenda WHERE idIdiomaLeg = ?', [id]);
    return removed_leg_language;
};

const readLegLanguage = async (leg_language) => {
    const [read_leg_language] = await connection.execute('SELECT * FROM IdiomaLegenda WHERE Filme_idFilme = ? AND Idioma_idIdioma = ?', [leg_language.Filme_idFilme, leg_language.Idioma_idIdioma]);
    return read_leg_language;
};

const readLegLanguageById = async (leg_language) => {
    const [readLegLanguage] = await connection.execute('SELECT * FROM IdiomaLegenda WHERE WHERE Filme_idFilme = ? AND Idioma_idIdioma = ?', [leg_language.Filme_idFilme, leg_language.Idioma_idIdioma]);
    return readLegLanguage;
};

const updateLegLanguage = async (id, leg_language) => {
    const {Filme_idFilme, Idioma_idIdioma} = leg_language;
    const [updated_leg_language] = await connection.execute('UPDATE IdiomaLegenda SET Filme_idFilme = ?, Idioma_idIoma = ? WHERE idIdiomaLeg = ?', [Filme_idFilme, Idioma_idIdioma, id]);
    return updated_leg_language;
};

module.exports = {
    getAll,
    getById,
    createLegLanguage,
    deleteLegLanguage,
    readLegLanguage,
    readLegLanguageById,
    updateLegLanguage
};