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
    // let user = false;
    // if (user) {
    //     res.status(200).json({
    //         mensagem: "User created!"
    //     });
    // } else {
    //     res.status(404).json({
    //         mensagem: "Error user not created!"
    //     });
    // }
}

// async function loginUsuario(req, res) {
//     let cnpj = req.params.cnpj
//     openDb().then(db => {
//         db.get('SELECT * FROM usuarios WHERE cpf=?', [cnpj])
//             .then(pessoa => {
//                 if (pessoa == null) {
//                     res.status(404).json({
//                         "message": "User not found"
//                     })
//                 } else {
//                     res.status(200).json(pessoa)
//                 }
//             })
//             .catch((err) => res.json(err))
//     });
// };

module.exports = {
    createTableUsuarios,
    addUsuario
}