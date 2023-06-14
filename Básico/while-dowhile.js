let oi = 0

while (oi <= 10) {
    console.log(oi);
    oi++;
}

console.log('PAUSA')

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 20
let rand = random(min, max)

while (rand !== 10) { // primeiro checa a condição e depois executa o código
    rand = random(min, max)
    console.log(rand)
}

console.log('PAUSA')

do { // primeiro executa o código, e depois checa a condição
    rand = random(min, max)
    console.log(rand)
} while (rand !== 5)