let input = document.querySelector('#input')
let addItens = document.querySelector('#itens')

let itens = []

function novaTarefa(evento) {
    if (input.value == '') {
        alert('Digite um item')
        input.style.border = '1px solid red'
    } else {
        input.style.border = 'none'
        addItens.style.display = 'flex'
        addItens.innerHTML = input.value

        itens.push(input.value)
        console.log(itens)

        // for (let i = 0; i < itens.length; i++) {
        //     let criarLi = document.createElement('li')
        //     addItens.appendChild =
        //     criarLi = valorInput
        //     console.log(criarLi)
        // }

    }
    input.value = ''
}

function limparTarefa() {
    alert('reset')
}
