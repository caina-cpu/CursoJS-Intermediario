// funções geradoras são funções que entregam valores a cada vez que são chamadas. Ex: 

function* geradora(){
    let i = 0

    while(true) {
        yield i; // yield funciona como um return, porém ele não para a função
        i++;
    }
}

const g1 = geradora()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

console.log('PAUSA')