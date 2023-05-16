let addItem = document.querySelector('#input__item')
let botaoItem = document.querySelector('#btn__add')
let itensAdicionados = document.querySelector('#adicionado')

const addLocalStorange = []

function adicionarItem() {

    if (addItem.value === '') {
        alert('Você precisa adicionar um item!')
        // border vermelha quando errado
        addItem.style.border = '1px solid #fa3737b7'
        

    } else {
        // incluindo item no array
        addLocalStorange.push(addItem.value)

        // setando no local storange
        localStorage.setItem(addLocalStorange, itensAdicionados)

        mostrarNaTela()
    }
    
    // limpando o input
    addItem.value = ''
}

// exclui item realizado
function duploCliqueChecado() {

    // excluindo os itens da local
    localStorage.removeItem(addLocalStorange, itensAdicionados)

    // limpando a página
    itensAdicionados.style.display = 'none'
}

function escrever() {
    addItem.style.border = 'none'
}

function mostrarNaTela() {

    let valores = JSON.parse(localStorage.getItem(addItem))

    let criarLi = document.createElement('li')

    for (let i = 0; i < addLocalStorange.length; i++) {

        console.log(criarLi)

        // itensAdicionados.innerHTML = addLocalStorange

        itensAdicionados.style.display = 'block'
    }
}
