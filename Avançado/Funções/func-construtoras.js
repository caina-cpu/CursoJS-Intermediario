// função construtora -> sempre começar o nome da função com letra maiúscula

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.metodo = function() {console.log(this.nome + ': Sou um método')}
}

const p1 = new Pessoa('Cainã', 'Mello', 21) // a palavra 'new' é responsável por criar um objeto e já retornar o elemento desejado, sem ter a necessidade de escrever o 'return' na função
const p2 = new Pessoa('Silvia', 'Fonseca', 55)

p2.metodo()