// funções fábricas são funções que retornam objetos

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura,
        get nomeComp() { // isso é um Getter, é usado para colocar a função como parte do objeto, ficando mais simples selecionar ela depois
            const nomeCom = nome + ' ' + sobrenome
            return nomeCom
        },
        get imc() { 
            const indice = this.peso / (this.altura ** 2); // o this é usado para acessar diretamente o valor da chave
            return console.log(`${this.nomeComp} pesa ${peso}kg e mede ${altura}m. Isso da um IMC de ${indice.toFixed(2)}.`)
        }
        // ou
        /*imc() {
            const indice = this.peso / (this.altura ** 2); // o this é usado para acessar diretamente o valor da chave
            return console.log(`${nome} ${sobrenome} pesa ${peso}kg e mede ${altura}m. Isso da um IMC de ${indice.toFixed(2)}.`)
        }*/
    }
}

const pessoa1 = criaPessoa('Cainã', 'Mello', 85, 1.85)
const pessoa2 = criaPessoa('Silvia', 'Fonseca', 70, 1.70)
const pessoa3 = criaPessoa('Rui', 'Jose', 75, 1.75)

pessoa3.imc

//ou

//pessoa1.imc() 
