const relatorio = [
    {
        nome: 'Turma M1',
        alunos: [{
            nome: 'Marcelo',
            nota: 8.8
        }, {
            nome: 'Aghata',
            nota: 7.5
        }]
    },
    {
        nome: 'Turma T1',
        alunos: [{
            nome: 'Igor',
            nota: 10
        }, {
            nome: 'Juan',
            nota: 6.8
        }]
    }
]

// Padrão (junção dos array - notas)
const getNotaAluno = alunos => alunos.nota
const getNotaTurmas = relatorio => relatorio.alunos.map(getNotaAluno)

const nota_tipo_1 = relatorio.map(getNotaTurmas)
console.log(nota_tipo_1) 

// FlatMap

Array.prototype.flatMap(function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
})

const nota_tipo_2 = relatorio.flatMap(getNotaTurmas)
console.log(nota_tipo_2)