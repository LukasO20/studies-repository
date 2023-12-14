let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'TESTE'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


// Criando uma variavel doidona: não tem var ou let!
maluca = 3 //Não tem uma definição do tipo de variável (evite isso)
console.log(global.maluca)