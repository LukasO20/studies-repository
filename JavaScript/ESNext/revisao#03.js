const { extend } = require("lodash")

// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias de Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, 
    ola(){
        return 'Olá ;]'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    speak(){
        return 'Au au!!'
    }
}

console.log(new Cachorro().speak())