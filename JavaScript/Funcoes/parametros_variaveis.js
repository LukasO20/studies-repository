function soma() {
    let somar = 0
    for (i in arguments){
        somar += arguments[i] //'Armaguments' é uma função do JS que captura todos os elementos do escopo e atribuir para um Array (no caso essa função)
    }
    return somar
}

console.log(soma())
console.log(soma(1, 2.2, 5.5, 10.2))
console.log(10)
console.log(soma('Tirei uma nota e o valor dela é ', 5.5, 8.2, '!'))