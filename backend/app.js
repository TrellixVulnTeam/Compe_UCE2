const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

//register new 
app.post('/register', (req, res) => {
    let user = false;
    if (user) {
        res.status(200).json({
            mensagem: "User created!"
        });
    } else {
        res.status(404).json({
            mensagem: "Error user not created!"
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}/`);
});