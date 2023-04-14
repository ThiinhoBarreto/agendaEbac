const form = document.getElementById('form');
let total = document.getElementById('total')
let linhas = '';
let totalContatos = 0

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNome = document.getElementById('inputNome');
    const inputPhone = document.getElementById('inputPhone');


    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    totalContatos ++;

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;

    total.innerHTML = totalContatos.toString()
    
    inputNome.value = '';
    inputPhone.value = '';
})
