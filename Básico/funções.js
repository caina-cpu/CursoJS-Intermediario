function saudacao(nome) {
    return `Bom dia, ${nome}!`
}

let teste = saudacao('Cainã')
console.log(teste)

console.log('PAUSA')

function soma(x = 1, y = 1) { //esses são valores que serão assumidos pelos parâmetros no caso de eu não dar nenhum outro valor
    const resultado = x + y
    return resultado
}

let n1 = 2
let n2 = 90

console.log(soma(n1, n2))
console.log(soma(5, 7))

console.log('PAUSA')

let raiz = function(n) {
    return n**0.5
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

console.log('Arrow Function:')

let mult = (n, a) => n * a

console.log(mult(10, 4))