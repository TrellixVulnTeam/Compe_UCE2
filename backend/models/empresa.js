const openDb = require('../configdb');

async function createTableEmpresas() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS empresas (id INTEGER PRIMARY KEY, cnpj TEXT, empresa TEXT, categoria TEXT, localizacao TEXT, senha TEXT)')
    });
};

async function addEmpresa(req, res) {
    let cnpj = req.body.cnpj;
    let empresa = req.body.empresa;
    let categoria = req.body.categoria;
    let localizacao = req.body.localizacao;
    let senha = req.body.senha;
    openDb().then(db => {
        db.run('INSERT INTO empresas (cnpj, empresa, categoria, localizacao, senha) VALUES (?,?,?,?,?)', [cnpj, empresa, categoria, localizacao, senha])
    });
    res.status(200).json({
        "statusCode": 200,
    });
};

async function pegarEmpresas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM empresas')
            .then(empresas => res.json(empresas))
    });
};

async function loginUsuario(req, res) {
    let cnpj = req.params.cnpj
    openDb().then(db => {
        db.get('SELECT * FROM empresas WHERE cnpj=?', [cnpj])
            .then(pessoa => {
                if (pessoa == null) {
                    res.status(404).json({
                        "message": "User not found"
                    })
                } else {
                    res.status(200).json(pessoa)
                }
            })
            .catch((err) => res.json(err))
    });
};

module.exports = {
    createTableEmpresas,
    addEmpresa,
    pegarEmpresas,
    loginUsuario
}