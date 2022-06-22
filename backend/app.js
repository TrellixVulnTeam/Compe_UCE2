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
app.get('/index', (req, res) => {
    res.setHeader('Set-Cookie', 'newUser=true')
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
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

//renderizando supplier profile
app.get('/supplierProfile', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/supplierProfile.html'))
})

//adicionando empresa
app.post('/api/adicionarEmpresa', pess.addEmpresa)

//carregando empresas
app.get('/api/pegarEmpresas', pess.pegarEmpresas)

//register new 
app.post('/api/register', usu.addUsuario)

//login
app.get('/api/login/:cnpj', pess.loginUsuario)

//load supplier profile
app.get('/api/supplierProfile/:cnpj', pess.pegarEmpresa)

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}/index`);
});