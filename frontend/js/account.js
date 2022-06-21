function authenticateLogin() {
    adminCredencial = {
        cpf: 'admin',
        senha: 'admin123'
    }
    let cpf = document.getElementById('cpf').value
    let senha = document.getElementById('senha').value
    fetch(`http://localhost:3000/api/login/${cpf}`)
        .then(res => res.json())
        .then(data => {
            if (cpf == data.cpf && senha == data.senha) {
                sessionStorage.setItem("userID", data.cpf)
                document.location.href='/'
            } else if (cpf == adminCredencial.cpf && senha == adminCredencial.senha) {
                document.location.href='/admin'
            }
        })
}