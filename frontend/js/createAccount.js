function createAccount() {
    if (passwordConfirm()) {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
            })
        }).then(res => {
            return res.json()
        })
        .then(data => {
            if (data.mensagem == 'User created!') {
                document.location.href = '../frontend/index.html';
            } else {
                alert('Username already exists');
            }
        });
    } else {
        alert('Password not OK');
    }
}

function passwordConfirm() {
    let pass = document.getElementById('password').value;
    let pass2 = document.getElementById('passwordConfirm').value;
    if (pass == pass2) {
        return true; 
    } else {
        return false;
    }
}