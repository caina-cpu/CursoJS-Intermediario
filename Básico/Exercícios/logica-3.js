// PRIMEIRO MODO DE FAZER:

/*function divisao(n) {
    if (typeof(n) == 'number' && n >= 0 && n <= 100) {
        if (n % 5 === 0 && n % 3 === 0) return 'FizzBuzz'
        if (n % 3 === 0) return 'Fizz'
        if (n % 5 === 0) return 'Buzz'
        if (n % 3 !== 0 && n % 5 !== 0) return n
    } else {
        return 'Escreva um número entre 0 e 100'
    }

}

const resultado = divisao('oi')

const resultado2 = resultado !== 'Escreva um número entre 0 e 100' ? 'É número' : 'Não é número'

console.log(`${resultado}, ${resultado2}`)*/

// SEGUNDO MODO DE FAZER: 

function fizzBuzz(n) {
    if(typeof(n) !== 'number') return 'Não é um número'
    if(n < 0 || n > 100) return 'Digite um número entre 0 e 100'
    if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    if(n % 3 === 0) return 'Fizz'
    if(n % 5 === 0) return 'Buzz'
    return n // se não atender a nenhum dos requisitos, ele retorna o número
}

console.log(fizzBuzz('a'))

for(let i = 0; i <= 100; i++) {
    console.log(`${i} : ${fizzBuzz(i)}`)
}

