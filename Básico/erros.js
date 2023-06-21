try {
    console.log(naoExisto)
} catch(error) {
    console.log('naoxisto não existe')
}

let Fsoma = function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números')
    }
    return x + y
}

try {
    console.log(Fsoma(1, 206))
} catch(err) {
    console.log('x e y precisam ser números')
}

console.log('PAUSA')

const tempo = new Date()

const zeroE = (num) => num >= 10 ? num : `0${num}`

try { //o JS vai tentar executar isso
    function formaData(tempo) {
        const hora = zeroE(tempo.getHours());
        const minuto = zeroE(tempo.getMinutes());
        const segundo = zeroE(tempo.getSeconds())
    
        return `Agora são ${hora}:${minuto}:${segundo}`
    }
    
    const horaBr = formaData(tempo)
    console.log(horaBr)
} catch(e) { // se não conseguir executar, ele vai retornar a mensagem desejada
    console.log('algo deu errado')
}

console.log('PAUSA')

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data) {
        data = new Date()
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-2019 12:57:11')
    const Hora = retornaHora()
    console.log(Hora)
} catch(e) {
    console.log('Vish, errou')
} finally { //esse sempre vai ser executado
    console.log('Tenha um ótimo dia!')
}




