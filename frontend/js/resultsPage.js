function loadSuppliers() {
    let display = document.getElementById('resultsDisplay')
    fetch('http://localhost:3000/api/pegarEmpresas')
        .then(ress => ress.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                display.innerHTML += `
                <div class="results__container__cards">
                    <img src="" alt="" width="140px" height="140px">
                    <div class="results__container__cards__right">
                        <ul class="results__container__cards__right__info">
                            <li>${element.empresa}</li>
                            <li>${element.categoria}</li>
                            <li>${element.cnpj}</li>
                            <li>${element.localizacao}</li>
                        </ul>
                    </div>
                </div>
                `
            });
        })
}