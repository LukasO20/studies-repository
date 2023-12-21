// Arrow function
const multi = (a, b) => a * b
console.log(multi(10, 5))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
lexico1()

const lexico2 = lexico1.bind({})
lexico2()

// parameter default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Olá, como está?')

// operador rest
function total(...numbers){
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(10, 20, 5, 2))