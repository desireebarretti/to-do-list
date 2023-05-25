let input = document.querySelector('#input')
let itensAdd = document.querySelector('#itens')
let todasPartesItem = document.querySelector('#partes-item')
let paragrafo = document.querySelector('#paragrafo')

function novaTarefa() {
    itensAdd.style.display = 'flex'
    todasPartesItem.style.display = 'flex'
    paragrafo.innerHTML = input.value
}

function tarefaChecada() {
    paragrafo.style.
}

function limparTarefa() {
    itensAdd.style.display = 'none'
}