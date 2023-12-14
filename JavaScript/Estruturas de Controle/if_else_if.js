Number.prototype.conferir_numbers = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(numero){
    if (numero.conferir_numbers(9, 10)){
        console.log("Simplesmente nerd!")
    } else if (numero.conferir_numbers(7, 8.99)){
        console.log("Aprovado")
    } else if (numero.conferir_numbers(4, 6.99)){
        console.log("Recuperação")
    } else if (numero.conferir_numbers(0, 3.99)){
        console.log("Reprovado")
    } else {
        console.log("Número inválido, tente novamente.")
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-11)
imprimirResultado(20)