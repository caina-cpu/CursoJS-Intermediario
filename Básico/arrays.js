let alunos = ['cainã', 'silvia', 'rui']

alunos.push('edna') //adiciona no fim
alunos.unshift('thomaz') // adiciona no começo

console.log(alunos)

let removidoFinal = alunos.pop() //remove um nome do final

console.log(`Depois de remover um aluno, a lista de alunos ficou assim: ${alunos}`)
console.log(`O nome do aluno removido é ${removidoFinal}`)

let removidoComeco = alunos.shift() //remove um nome do começo

console.log(`Depois de remover um aluno, a lista de alunos ficou assim: ${alunos}`)
console.log(`O nome do aluno removido é ${removidoComeco}`)

