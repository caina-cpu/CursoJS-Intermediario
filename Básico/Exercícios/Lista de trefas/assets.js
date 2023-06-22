let inputTarefa = document.querySelector('.tarefa')
let butTarefa = document.querySelector('.botão')
let lista = document.querySelector('.tarefas')

function criaTarefa(textoTarefa) { // essa função recebe o valor
    const li = document.createElement('li');
    li.innerHTML = inputTarefa.value
    lista.appendChild(li)
    criaBotaoApagar(li)
    criaBotaoConcluido(li)
}

function criaBotaoApagar(li) {
    li.innerHTML += '. ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaBotaoConcluido(li) {
    li.innerHTML += ' ';
    const botaoConcluido = document.createElement('button');
    botaoConcluido.innerText = 'Concluído'
    botaoConcluido.setAttribute('class', 'concluido')
    li.appendChild(botaoConcluido)
}

inputTarefa.addEventListener('keypress', function (e) { // função responsável por fazer o enter ser válido como um botão
    if (e.keyCode === 13) { // aqui estou capturando se a tecla enter for pressionada (13 é o valor padrão dela)
        if (inputTarefa.value.length == 0) return alert('Adicione uma tarefa válida');
        criaTarefa(inputTarefa.value) // isso aqui joga o valor para outra função
        inputTarefa.value = ''
        inputTarefa.focus()
    }
})

butTarefa.addEventListener('click', function () { //isso aqui captura o evento de click no botão
    if (inputTarefa.value.length == 0) return alert('Adicione uma tarefa válida');
    criaTarefa(inputTarefa.value) // isso aqui joga o valor para outra função
    inputTarefa.value = ''
    inputTarefa.focus()
})


document.addEventListener('click', function(e){ // função para remover a tarefa clicando no botão apagar
    el = e.target;
    
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})

document.addEventListener('click', function(e){ // função para deixar a tarefa verde e apagar o botão 'concluído' quando ela for concluída
    const el = e.target;
    
    if(el.classList.contains('concluido')) {
        el.parentElement.style.color = 'green';
        el.remove()
    }
})

