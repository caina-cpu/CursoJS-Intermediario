// PARA ARRAYS:

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const [um, dois , , quatro, ...resto] = numeros

console.log(um, dois)
console.log(quatro)
console.log(resto)

const numeros2 = [[1, 2 ,3], [4, 5 ,6], [7, 8, 9]]

console.log(numeros2[1][2])

const [lista1, lista2, lista3] = numeros2

console.log(lista3[1])

console.log('PAUSA')

// PARA OBJETOS:

const pessoa = {nome: 'Cainã', sobrenome: 'Mello', idade: 21, endereço: {rua: 'Ignes', numero: 100}}

const {nome, sobrenome, ...resto1} = pessoa

console.log(nome)
console.log(resto1)

const {endereço: {rua: r, numero}} = pessoa

console.log(`Eu moro na rua ${r}, número ${numero}.`)

