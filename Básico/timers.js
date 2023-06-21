/*
function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {hour12: false})
}
*/

let num = 0

function contar() {
    return num = num + 1
}

const timer = setInterval(function() { // aqui estamos definindo o que irá acontecer em cada etapa do timer e o seu intervalo
    console.log(contar());
}, 1000); // a medida do intervalo e as demais são feitas em milisegundos (1s = 1000ms)

setTimeout(function() { // aqui estamos definindo até quando o timer vai durar
    clearInterval(timer)
}, 6000);

setTimeout(function() { // aqui estamos definindo quando a mensagem de finalizado aparecerá
    console.log('Acabou!')
}, 6000)

