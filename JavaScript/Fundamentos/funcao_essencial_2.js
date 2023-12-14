// Função sem retorno
function imprimirValor(a, b) {
    console.log(a + b)
}

imprimirValor(2, 5)
imprimirValor(5)
imprimirValor(10, 20, 5, 8, 9) // 5, 8, 9 Não foram considerações (Flexibilidade doida do Java Script :D)
imprimirValor()

// Função com retorno
function somar(a, b = 0){
    return a + b
}

console.log(somar(10, 20))
console.log(somar(10))
console.log(somar())