// par nome/valor
const mensagem = 'Olá' // contexto léxico 1 

function execute() {
    const mensagem = "Como vai?" // contexto léxico 2
    return mensagem
}

// Objetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Lucas',
    idade: 23,
    peso: 67,
    endereco: {
        logradouro: 'Em algum lugar em São Paulo',
        numero: 7
    }
}

console.log(mensagem)
console.log(execute())
console.log(cliente)