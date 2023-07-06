function funcao() {
    let total = 0
    for(let argumento of arguments) { // se a função não tiver arumentos e mesmo assim eles forem declarados, eles vão parar na variável 'arguments', que é uma variável criada automaticamente dentro da function e que guarda todos os argumentos presentes em sua declaração. NÃO FUNCIONA PARA ARROW FUNCTION
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5) //desestruturação objetos:

console.log('PAUSA')

function funObj({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

funObj({nome: 'Cainã', sobrenome: 'Mello', idade: 19})

console.log('PAUSA') // desestruturação arrays:

function funArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

funArray(['Oi', 'Sou', 'Cainã'])

// ou

const func = ['Eu', 'Sou', 'Cainã', 'Mello']

function funArray([valor1, valor2, valor3, valor4]) {
    console.log(valor1, valor2, valor3, valor4)
}

funArray(func)

console.log('PAUSA') // função com rest e argument:

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('+', 1, 2, 3, 4, 5)





