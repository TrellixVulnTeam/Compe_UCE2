const openDb = require('../configdb');

async function createTableEmpresas() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS empresas ( id INTEGER PRIMARY KEY, nome TEXT, cnpj TEXT, categoria TEXT)')
    });
};

module.exports = {
    createTableEmpresas
}