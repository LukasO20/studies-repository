//Arrow functions - Exercícios
//PAUSADO (POR ENQUANTO) - NÃO FIZ POR NÃO TER NECESSIDADE

// Exe 01

Operador = (a, b, operadora = '+') => {
    if (operadora === '+') {
        console.log('Adição')
        return a + b
    }

    if (operadora === '-') {
        console.log('Subtração')
        return a - b
    }    
    
    if (operadora === '*') {
        console.log('Multiplicação')
        return a * b
    }

    if (operadora === '/') {
        console.log('Divisão')
        return a / b
    }
}

console.log('Escolha um operador no parametri da função para brincar com os números: + | - | * | / |')
const meuCalculo = Operador(10, 5, '*')
console.log(meuCalculo)

// Exe 02