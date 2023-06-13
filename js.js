let input = document.querySelector('#input')
let addItens = document.querySelector('#itens')

let itens = []

function novaTarefa(evento) {

    if (input.value == '') {
        // em caso de não ter digitado um item
        alert('Digite um item')
        input.style.border = '1px solid red'

    } else {
        // caso tenha digitado um item
        input.style.border = 'none'
        addItens.style.display = 'flex'

        itens.push(input.value)
        addItens.innerHTML = itens 

        for (let i = 0; i < itens.length; i = i+itens) {
            console.log(itens)

            // criando uma lista com classe, e conteudo
            let criarItemLista = document.createElement("li")
            criarItemLista.classList = 'itens'
            criarItemLista.textContent = `${itens}`

            console.log(criarItemLista)
        }

    }
    input.value = ''
}

function limparTarefa() {
    alert('reset')
}
