const connection = require('./connection');

const getAll = async() => {
    const [dub_languages] = await connection.execute('SELECT * FROM IdiomaDublagem');
    return dub_languages;
};

const getById = async(Filme_idFilme, Idioma_idIdioma) => {
    const [dub_language] = await connection.execute('SELECT * FROM IdiomaLegenda WHERE Filme_idFilme = ? AND Idioma_idIdioma', [Filme_idFilme, Idioma_idIdioma]);
    return dub_language;
}


const createDubLanguage = async(dub_language) => {
    const {Filme_idFilme, Idioma_idIdioma, nativa} = dub_language;
    const [created_dub_language] = await connection.execute('INSERT INTO IdiomaDublagem(Filme_idFilme, Idioma_idIdioma, nativa) VALUES (?, ?, ?)', [Filme_idFilme, Idioma_idIdioma, nativa]);
    return created_dub_language;
};

const deleteDubLanguage = async (id) => {
    const [removed_dub_language] = await connection.execute('DELETE FROM IdiomaDublagem WHERE idIdiomaDub = ?', [id]);
    return removed_dub_language;
};

const readDubLanguage = async (dub_language) => {
    const [read_dub_language] = await connection.execute('SELECT * FROM IdiomaDublagem WHERE Filme_idFilme = ? AND Idioma_idIdioma = ? AND nativa = ?', [Filme_idFilme, Idioma_idIdioma, nativa]);
    return read_dub_language;
};

const readDubLanguageById = async (dub_language) => {
    const [readDubLanguage] = await connection.execute('SELECT * FROM IdiomaDublagem WHERE Filme_idFilme = ? AND Idioma_idIdioma = ?', [dub_language.Filme_idFilme, dub_language.Idioma_idIdioma]);
    return readDubLanguage;
};

const updateDubLanguage = async (id, dub_language) => {
    const {Filme_idFilme, Idioma_idIdioma, nativa} = dub_language;
    const [updated_dub_language] = await connection.execute('UPDATE IdiomaDublagem SET Filme_idFilme = ?, Idioma_idIoma = ?, nativa = ? WHERE idIdiomaDub = ?', [Filme_idFilme, Idioma_idIdioma, nativaFilme_idFilme, Idioma_idIdioma, nativa, id]);
    return updated_dub_language;
};

module.exports = {
    getAll,
    getById,
    createDubLanguage,
    deleteDubLanguage,
    readDubLanguage,
    readDubLanguageById,
    updateDubLanguage
};