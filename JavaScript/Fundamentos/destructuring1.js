// Novo recurso no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua SP',
        numero: 2015,
        // cep: 4578
    }
}

const {nome , idade} = pessoa //Os valores nome e idadeforam retirados da const pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, tipo = true} = pessoa
console.log(sobrenome, tipo)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) 