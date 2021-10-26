
const masks = {
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

function insertData(cep, uf, state, cases, deaths, suspects, refuses) {
    
    container = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML =  `
        <td>${cep}</td>
        <td>${uf}</td>
        <td>${state}</td>
        <td>${cases}</td>
        <td>${deaths}</td>
        <td>${suspects}</td>
        <td>${refuses}</td>
        `;
    container.appendChild(tr);
    
}

const consultarCov = async (uf, cep) => {

    let ufConsult = uf;
    let urlCov = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${ufConsult}`

    const data = await fetch(urlCov, {
        "method": "GET"
    })
        .then(response => response.json())
        .catch(err => console.error(err));

    insertData(cep, data.uf, data.state, data.cases, data.deaths, data.suspects, data.refuses);


}

const consultarCep = async () => {
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dados = await fetch(url);
    let endereco = await dados.json();
    let uf = endereco['uf'];
    consultarCov(uf, cep);
}

