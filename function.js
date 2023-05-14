let addItem = document.querySelector('#input__item')
let botaoItem = document.querySelector('#btn__add')
let itensAdicionados = document.querySelector('#adicionado')
let img = document.querySelector('#img')
let botaoCheck = document.querySelector('#btn__check')

const addLocalStorange = []

function adicionarItem() {

    if (addItem.value === '') {
        alert('Você precisa adicionar um item!')
        // border vermelha quando errado
        addItem.style.border = '1px solid #fa3737b7'
        addItem.style.focus

    } else {
        // incluindo item no array
        addLocalStorange.push(addItem.value)

        // setando no local storange
        localStorage.setItem(addLocalStorange, itensAdicionados)

        mostrarNaTela()
    }
    addItem.value = ''
}

// exclui item realizado
function duploCliqueChecado() {
    itensAdicionados.style.display = 'none'
}

function escrever() {
    addItem.style.border = 'none'
}

function mostrarNaTela() {

    for (let i = 0; i < addLocalStorange.length; i++) {
        itensAdicionados.innerHTML = addLocalStorange
        itensAdicionados.style.display = 'block'
    }
}