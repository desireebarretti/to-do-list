// nome da chave

const localStorageKey = 'to-do-list'
let list = document.querySelector('#adicionado')

function novaTarefa() {
    let input = document.querySelector('#input__item')

    if(!input.value){
        alert('Você precisa digitar algo!')
        input.style.border = '1px solid #fa3737b7'

    } else {
        input.style.border = 'none'
        let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')

        values.push(
            {
                valor: input.value
            }
        )
        localStorage.setItem(localStorageKey, JSON.stringify(values))

        mostrarValores()

    }
    input.value = ''
}

function mostrarValores() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')

    list.innerHTML = ''

    for(let i = 0; i < values.length; i++) {

       list.innerHTML += `<li id="lista__li" ondblclick="remover('${values[i]['valor']}')"> ${values[i]['valor']} </li>`

       list.style.display = 'block'

    }
}

function remover(data) {

    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let index = values.findIndex(x => x.name == data)

    values.splice(index)
    localStorage.setItem(localStorageKey, JSON.stringify(values))

    mostrarValores()
    
    console.log(data)
}

mostrarValores()