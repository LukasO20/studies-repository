const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// For com propósito
let resultado = numbers.map(function(e){
    return e * 2
})

console.log(`Map: ${resultado} Original: ${numbers}`)

const soma = e => e + 5
const triplo = e =>  e * 3
const real = e => 'R$ ' + parseFloat(e).toFixed(2).replace('.', ',')

resultado = numbers.map(soma).map(triplo).map(real)
console.log(resultado)