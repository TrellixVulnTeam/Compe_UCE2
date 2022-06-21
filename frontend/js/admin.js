function adicionarEmpresa() {
    fetch('http://localhost:3000/api/adicionarEmpresa', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
             cnpj: document.getElementById('cnpj').value,
             empresa: document.getElementById('empresa').value,
             categoria: document.getElementById('categoria').value,
             localizacao: document.getElementById('localizacao').value
        })
    }).then(res => {
        return res.json()
    })
    .then(data => {
        if (data.statusCode == 200) {
            alert('Empresa criada')
        } else {
            alert('Erro na criação de empresa')
        }
    })
}