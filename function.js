let addItem = document.querySelector('#input__item')
let botaoItem = document.querySelector('#btn__add')
let itensAdicionados =  document.querySelector('#adicionado')
let img = document.querySelector('#img')

function adicionarItem() {
   
    if (addItem.value === ''){
        alert('Você precisa adicionar um item!')
        addItem.style.border = '1px solid #fa3737b7'
        addItem.style.focus

    } else {
        itensAdicionados.innerHTML = addItem.value  
        itensAdicionados.style.display = 'block'
    }
    addItem.value = ''
}

function duploCliqueChecado(){
    itensAdicionados.style.display = 'none'
}

function escrever() {
    addItem.style.border = 'none'
}