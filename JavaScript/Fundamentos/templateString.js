const nome = 'Laura'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressão
console.log(`1 + 1 = ${1 + 1}`)

const upper = texto => texto.toUpperCase()
console.log(`Atenção... ${upper('cuidado')}!`)