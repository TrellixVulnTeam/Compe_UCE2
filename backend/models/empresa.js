const openDb = require('../configdb');

async function createTableEmpresas() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS empresas (id INTEGER PRIMARY KEY, cnpj TEXT, empresa TEXT, categoria TEXT, localizacao TEXT)')
    });
};

async function addEmpresa(req, res) {
    console.log(req.body);
    let cnpj = req.body.cnpj;
    let empresa = req.body.empresa;
    let categoria = req.body.categoria;
    let localizacao = req.body.localizacao;
    openDb().then(db => {
        db.run('INSERT INTO empresas (cnpj, empresa, categoria, localizacao) VALUES (?,?,?,?)', [cnpj, empresa, categoria, localizacao])
    });
    res.status(200).json({
        "statusCode": 200,
    });
}

module.exports = {
    createTableEmpresas,
    addEmpresa
}