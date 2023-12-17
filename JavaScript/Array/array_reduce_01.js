const alunos = [
    {nome: 'José', nota: 8.5, bolsista: false},
    {nome: 'Juan', nota: 9.6, bolsista: true},
    {nome: 'Eliana', nota: 7.5, bolsista: false},
    {nome: 'Marly', nota: 8, bolsista: true},
    {nome: 'Juana', nota: 10, bolsista: false}
]

console.log(alunos.map(a => a.nota))

const somarNotas = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(somarNotas)