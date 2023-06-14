for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(`O número ${i} é ${par}.`)
}

console.log('PAUSA')

const frutas = ['maçã', 'banana', 'mamão', 'melancia', 'uva']

for (let f = 0; f < frutas.length; f++) {
    console.log(`Hoje eu vou no mercado comprar ${frutas[f]}.`)
}