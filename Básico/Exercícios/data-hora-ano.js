/*
PRIMEIRA MANEIRA DE FAZER:
let data = new Date()
let diaSem = data.getDay()
let diaSemTexto = 0
let dia = data.getDate()
let mes = data.getMonth()
let mesTexto = 0
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let sec = data.getSeconds()

switch (diaSem) {
    case 0: diaSemTexto = 'Domingo'
    break
    case 1: diaSemTexto = 'Segunda-feira'
    break
    case 2: diaSemTexto = 'Terça-feira'
    break
    case 3: diaSemTexto = 'Quarta-feira'
    break
    case 4: diaSemTexto = 'Quinta-feira'
    break
    case 5: diaSemTexto = 'Sexta-feira'
    break
    case 6: diaSemTexto = 'Sábado'
    break
}

switch (mes) {
    case 0: mesTexto = 'Janeiro'
    break
    case 1: mesTexto = 'Fevereiro'
    break
    case 2: mesTexto = 'Março'
    break
    case 3: mesTexto = 'Abril'
    break
    case 4: mesTexto = 'Maio'
    break
    case 5: mesTexto = 'Junho'
    break
    case 6: mesTexto = 'Julho'
    break
    case 7: mesTexto = 'Agosto'
    break
    case 8: mesTexto = 'Setembro'
    break
    case 9: mesTexto = 'Outubro'
    break
    case 10: mesTexto = 'Novembro'
    break
    case 11: mesTexto = 'Dezembro'
    break
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const Dia = zeroAEsquerda(dia)
    const Hora = zeroAEsquerda(hora)
    const Min = zeroAEsquerda(min)
    const Sec = zeroAEsquerda(sec)

    return `${diaSemTexto}, ${Dia} de ${mesTexto} de ${ano}. Horário: ${Hora}:${Min}:${Sec}.`
}

const dataDef = formataData(data)

console.log(dataDef)
*/
//SEGUNDA MANEIRA DE FAZER:
const data = new Date()
const opcoes = {
    dateStyle: 'full', timeStyle: 'full'
}

console.log(data.toLocaleString('pt-BR', opcoes))