// FOR PADRÃO:

for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(`O número ${i} é ${par}.`)
}

console.log('PAUSA')

const frutas = ['maçã', 'banana', 'mamão', 'melancia', 'uva']

for (let f = 0; f < frutas.length; f++) {
    console.log(`Hoje eu vou no mercado comprar ${frutas[f]}.`)
}

console.log('PAUSA')

// FOR IN:

const nome = 'Cainã Mello'

for (let e in nome) {
    console.log(nome[e])
}

const pessoas = ['Cainã', 'Thamirys', 'Silvia', 'Rui', 'Edna']

for (let u in frutas) {
    console.log(`${pessoas[u]} faz parte da minha família.`)
}

console.log('PAUSA')

const info = {
    nome: 'Cainã',
    sobrenome: 'Mello',
    idade: 19
}

for (let chave in info) {
    console.log(`${chave} : ${info[chave]}`)
}

console.log('PAUSA')

// FOR OF (não serve para objetos, apenas para arrays):

const oi = ['oi', 'tudo', 'bem', 'com', 'voce']

for (let y of oi) {
    console.log(y)
}



