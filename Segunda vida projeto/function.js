let botaoAdicionarItem = document.querySelector('#btn__add')
let inputItem = document.querySelector('#input__item')
const localStorageKey = 'chave-local-storange'

function btn__addItem() {
    if (inputItem.value == '') {
        alert('Digite o item para adicionar na sua lista!')

        inputItem.style.border = '1px solid red'
    } else {
        inputItem.style.border = 'none'
        mostrarValoresTela()
    }
    
}

function mostrarValoresTela() {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let criarLi = document.querySelector('#ul__addItem')

    valores.push(
        {
            valor: inputItem.value
        }
    )
    localStorage.setItem(localStorageKey, JSON.stringify(valores))

    for (let i = 0; i < valores.length; i++) {
        criarLi.style.display = 'block'

        // colocando a let valores, na posição atual, e na propriedade valor
        criarLi.innerHTML = `<li>${valores[i]['valor']}</li>`
    }

}
