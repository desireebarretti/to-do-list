let addItem = document.querySelector('#input__item')
let botaoItem = document.querySelector('#btn__add')
let itensAdicionados =  document.querySelector('#adicionado')

function adicionarItem() {
    if (addItem.value === ''){
        alert('Você precisa adicionar um item!')
    } else {
        itensAdicionados.innerHTML = addItem.value  
    }
}