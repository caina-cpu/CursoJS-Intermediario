function falaOi(n) {
    console.log('Oi')
    return console.log(n)
}

falaOi(10)

console.log('PAUSA')

const souDado = function() {
    console.log('Sou um dado')
}

function executar(funcao) {
    console.log('Vou executar')
    funcao() // portanto, você pode executar funções colocando elas como parâmetros. Aqui executamos o parâmetro
}

executar(souDado) // e aqui chamamos a função, deixando ela como um parâmetro para ser executado

console.log('PAUSA')

const arrow = () => {
    console.log('Sou uma arrow function')
}

arrow()

console.log('PAUSA')

const obj = {falar: function() {console.log('Estou dentro de um objeto')}}

obj.falar()

//ou

const obj2 = {falar() {console.log('Também estou num objeto')},
pensar() {console.log('Olha, eu também!')}
}

obj2.falar()
obj2.pensar()