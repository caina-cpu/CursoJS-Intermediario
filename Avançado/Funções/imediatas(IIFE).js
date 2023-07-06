(function(n1, n2){ // essa função é totalmente anônima e é chama dentro dela mesma, não alterando nada do escopo global
    const soma = n1 + n2
    if(n1 !== 0 && n2 !== 0) return console.log(`A soma dos parâmetros é igual a ${soma}`);
}) (9, 4);

console.log('PAUSA');

(function(idade, peso, altura){
    const sobrenome = 'Mello';
    function criaNome(nome) {
        return `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, peso ${peso}kg e tenho ${altura}m de altura.`
    }

    function falaNome() {
        console.log(criaNome('Cainã'));
    }

    falaNome();
}) (21, 85, '1,85');