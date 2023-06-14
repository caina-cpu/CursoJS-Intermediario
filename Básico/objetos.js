let pessoa1 = {nome: 'Cainã', sobrenome: 'Mello', idade: 21}

console.log(`Olá, meu nome é ${pessoa1.nome} ${pessoa1.sobrenome} e eu tenho ${pessoa1.idade} anos.`)

function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

let pessoa2 = criarPessoa('Cainã', 'Mello', 21)
let pessoa3 = criarPessoa('Rui', 'Jose', 55)
let pessoa4 = criarPessoa('Silvia', 'Helena', 56)
let pessoa5 = criarPessoa('Edna', 'Ferreira', 85)

console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)

let pessoa6 = {
    nome: 'Edna', sobrenome: 'Ferreira', idade: 85,

    fala() { 
        console.log(`${this.nome} ${this.sobrenome} está dizendo Oi... A idade dela é ${this.idade} anos.`)
    } ,

    incrementarIdade() {
        this.idade++
    }
}

pessoa6.fala()
pessoa6.incrementarIdade()
pessoa6.fala()
pessoa6.incrementarIdade()
pessoa6.fala()
pessoa6.incrementarIdade()
pessoa6.fala()
pessoa6.incrementarIdade()
pessoa6.fala()
pessoa6.incrementarIdade()
pessoa6.fala()

console.log('PAUSA')

const fruta = {
    roxo: 'uva',
    vermelha: 'maçã',
    amarela: 'banana', 
    verde: 'melancia'    
}

for (let i in fruta) {
    console.log(`A ${fruta[i]} é da cor ${i}.`)
}


