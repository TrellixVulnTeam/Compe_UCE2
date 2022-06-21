function createAccount() {
    if (passwordConfirm()) {
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome: document.getElementById('nome').value,
                senha: document.getElementById('senha').value,
                email: document.getElementById('email').value,
                cpf: document.getElementById('cpf').value
            })
        }).then(res => {
            return res.json()
        })
        .then(data => {
            if (data.statusCode == 200) {
                sessionStorage.setItem("userID", data.id)
                alert('User created')
                document.location.href = '/';
            } else {
                alert('User not created');
            }
        });
    } else {
        alert('Passwords are not the same');
    }
}

function passwordConfirm() {
    let pass = document.getElementById('senha').value;
    let pass2 = document.getElementById('passwordConfirm').value;
    if (pass == pass2) {
        return true; 
    } else {
        return false;
    }
}