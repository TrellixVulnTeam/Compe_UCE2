function loadProfile() {
    let cnpj = sessionStorage.getItem('userID')
    fetch(`/api/supplierProfile/${cnpj}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('nomeEmpresa').innerHTML = data.empresa
            document.getElementById('localizacaoEmpresa').innerHTML = data.localizacao
            document.getElementById('categoriaEmpresa').innerHTML = data.categoria
            document.getElementById('cnpjEmpresa').innerHTML = data.cnpj
        })
}