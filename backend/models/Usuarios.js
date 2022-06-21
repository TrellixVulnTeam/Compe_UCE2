const openDb = require('../configdb');

async function createTableUsuarios() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, senha TEXT, email TEXT, cpf TEXT)')
    });
};

async function addUsuario(req, res) {
    let nome = req.body.nome;
    let senha = req.body.senha;
    let email = req.body.email;
    let cpf = req.body.cpf;
    openDb().then(db => {
        db.run('INSERT INTO usuarios (nome, senha, email, cpf) VALUES (?,?,?,?)', [nome, senha, email, cpf])
    });
    res.status(200).json({
        "statusCode": 200,
        "id": cpf
    });
}

module.exports = {
    createTableUsuarios,
    addUsuario
}