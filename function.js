let addItem = document.querySelector('#input__item')
let botaoItem = document.querySelector('#btn__add')
let itensAdicionados =  document.querySelector('#adicionado')
let img = document.querySelector('#img')

function adicionarItem() {
   
    if (addItem.value === ''){
        alert('Você precisa adicionar um item!')

    } else {
        itensAdicionados.innerHTML = addItem.value  
        itensAdicionados.style.display = 'block'
    }
    addItem.value = ''
}

function duploCliqueChecado(){

    itensAdicionados.style.display = 'none'
}
