const identity = {
    nome: 'Rebecca',
    idade: 23,
    peso: 62
}

console.log(Object.keys(identity))
console.log(Object.values(identity))
console.log(Object.entries(identity))

Object.entries(identity).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(identity, 'nascimento', {
    enumerable: true,
    writable: false,
    value: '15/04/2000'
})

identity.nascimento = '22/05/2001'
console.log(identity.nascimento)
console.log(Object.keys(identity))

// Object.assign (ECMAScript 2015)
const obj_inicio = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 5}
const obj_fim = Object.assign(obj_inicio, obj1, obj2)

Object.freeze(obj_fim)
obj_fim.c = 1234
console.log(obj_fim)
