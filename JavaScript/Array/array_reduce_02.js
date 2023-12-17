const alunos = [
    {nome: 'José', nota: 8.5, bolsista: false},
    {nome: 'Juan', nota: 9.6, bolsista: true},
    {nome: 'Eliana', nota: 7.5, bolsista: false},
    {nome: 'Marly', nota: 8, bolsista: true},
    {nome: 'Juana', nota: 10, bolsista: false}
]

// Todos os alunos são bolsistas?
const alunosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsistas))

// Algum aluno é bolsista?
const umAlunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(umAlunoBolsista))