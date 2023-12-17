const alunos = [
    {nome: 'Luana', nota: 8.9},
    {nome: 'Lucio', nota: 8}
]

// Imperativo
let totalImperativo = 0
for  (let i = 0; i < alunos.length; i++){
    totalImperativo += alunos[i].nota 
}
console.log(totalImperativo / alunos.length)

// Declarativo
const getNota = alunos => alunos.nota
const soma = (totalDeclarativo, atual) => totalDeclarativo + atual
const total = alunos.map(getNota).reduce(soma)
console.log(total / alunos.length)