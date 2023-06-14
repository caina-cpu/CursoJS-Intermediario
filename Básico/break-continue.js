const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero % 2 !== 0) {
        console.log('pulei um número ímpar')
        continue; // no continue, o js pula o valor que você quiser e continua executando a função
    }

    console.log(numero)

    if (numero === 8) {
        console.log('número 8 encontrado, saindo!')
        break // no break, o js assim que achar o valor desejado, para de executar a função por completo
    }
}