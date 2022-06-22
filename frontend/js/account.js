function authenticateLogin() {
    const adminCredencial = {
        cnpj: 'admin',
        senha: 'admin123'
    }
    let cnpj = document.getElementById('cnpj').value
    let senha = document.getElementById('senha').value
    fetch(`http://localhost:3000/api/login/${cnpj}`)
        .then(res => res.json())
        .then(data => {
            if (cnpj == data.cnpj && senha == data.senha) {
                sessionStorage.setItem("userID", data.cnpj)
                document.cookie = "newUser=false"
                document.location.href='/supplierProfile'
            } else if (cnpj == adminCredencial.cnpj && senha == adminCredencial.senha) {
                sessionStorage.setItem("userID", data.cnpj)
                document.location.href='/admin'   
            }
        })
}