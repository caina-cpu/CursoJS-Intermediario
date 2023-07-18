const soma = function(n1, n2) {
    return console.log(n1 + n2)
}

soma(2, 6)

console.log('PAUSA')

function falaFrase(comeco) {
    function falaResto(resto) {
        function falaResto2(resto2) {
            function falaResto3(resto3) {
                return `${comeco} ${resto}${resto2} ${resto3}`
            }
            return falaResto3
        }
        return falaResto2
    }
    return falaResto
}

const fala = falaFrase('Olá')
const fala2 = fala('Mundo')
const fala3 = fala2('!')
console.log(fala3('HAHA'))

console.log('PAUSA') 

function multiplica(n, multiplicador) {
    if(multiplicador === 2) return n * 2
    if(multiplicador === 3) return n * 3
    if(multiplicador === 4) return n * 4
}

console.log(multiplica(3, 2))

//ou

function criaMult(mult) {
    function conta(n) {
        return n * mult
    }
    return conta
}

const duplica = criaMult(2)
const triplica = criaMult(3)
const quadriplica = criaMult(4)
const quint = criaMult(5)

console.log(duplica(5))
console.log(triplica(5))
console.log(quadriplica(5))
console.log(quint(5))

