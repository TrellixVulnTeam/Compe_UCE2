function authenticateLogin() {
    const adminCredencial = {
        username: 'admin',
        password: 'admin123'
    }
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    if (username == adminCredencial.username && password == adminCredencial.password) {
        document.location.href='/admin'
    }
}