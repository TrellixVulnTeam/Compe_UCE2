const express = require('express');
const cors = require('cors');
const path = require('path');
const pess = require('./models/Empresa');
const usu = require('./models/Usuarios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '../../frontend')))

const port = process.env.PORT || 3000;

pess.createTableEmpresas();
usu.createTableUsuarios();

//renderizando pagina html
app.get('/', (req, res) => {
    res.sendFile('/index.html');
})

//renderizando pagina account
app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/account.html'))
})

// renderizando pagina suppliers
app.get('/suppliers', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/resultsPage.html'))
})

// renderizando pagina admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/admin.html'))
})

//adicionando empresa
app.post('/api/adicionarEmpresa', pess.addEmpresa)

//carregando empresas
app.get('/api/pegarEmpresas', pess.pegarEmpresas)

//register new 
app.post('/api/register', usu.addUsuario)

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


app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}/`);
});