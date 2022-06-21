const openDb = require('../configdb');

async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    });
};

module.exports = {
    createTable
}