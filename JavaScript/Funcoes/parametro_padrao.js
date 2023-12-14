// Valores padrão para variáveis tipo 1
function somar(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(somar(10, 5, 1), somar(), somar(5, 2, 5.5))

// Valor padrão para variáveis tipo 2
function somar2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(somar2(), somar2(0, 0, 0), somar2(10, 5.5, 1))

// Valor padrão para variáveis es2015
function somar3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(somar3(), somar3(0, 0, 0), somar3(10, 5, 5))