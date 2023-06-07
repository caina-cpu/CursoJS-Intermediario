
//Existem os valores primitivos e os por referência. Os primitivos são: string, number, boolean, undefined, null (ou seja, valores que são apenas copiados e não são mutáveis)
//Já os por referência são: array, object, function (ou seja, valores que são passados por referência e podem ser mudados no meio do caminho)

//Valores por referência:
let a = ['Cainã', 'Edna', 'Silvia']
let b = a
let c = a

console.log(a, b)

a.push('Rui')

console.log(a, b)

b.push('Thomaz')

console.log(a, b)

a.push('Elenir')

console.log(c)

console.log('Testando em objetos:')

let d = {nome: 'Cainã', sobrenome: 'Mello'}
let e = d

console.log(e.sobrenome)

