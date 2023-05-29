let input = document.querySelector('#input')
let addItens = document.querySelector('#itens')


function novaTarefa() {
    if(input.value == ''){
        alert('Digite algo')
        input.style.border = '1px solid red'
    } else {
        addItens.style.display = 'flex'
        addItens.innerHTML = input.value
    }
    
}

function limparTarefa() {
    alert('reset')
}