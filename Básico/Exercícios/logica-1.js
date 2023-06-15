// PRIMEIRA MANEIRA DE FAZER: (if)

/*let funcao = function vari(n1 = 1, n2 = 1) {
    if (n1 === n2) {
        return 1
    } else {
        if(n1 > n2) {
            return n1
        } else {
            return n2
        }
    }
}

console.log(funcao(5, 10))*/

// SEGUNDA MANEIRA DE FAZER: (ternário)

/*function vari(x, y) {
    return x > y ? x : y
}

const variavel = vari(8,8)

console.log(variavel)*/

// TERCEIRA MANEIRA DE FAZER: (arrow function)

const max = (x, y) => x > y ? x : y

console.log(max(100, 500))