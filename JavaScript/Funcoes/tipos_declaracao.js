console.log(soma(10, 10))

// funcion declaration
function soma (x, y){ //Podem ser chamada em qualquer parte do código (caso seja global)
    return x + y
}

// function expression
const sub = function(x, y){ //Podem ser chamada somente após da linha de criação do código (a linha o qual foi criado)
    return x - y
}
console.log(sub(50, 17))

// named function expressions
const multi = function multi(a, b){ //Podem ser chamada somente após da linha de criação do código (a linha o qual foi criado)
    return a * b
}
console.log(multi(5, 2))