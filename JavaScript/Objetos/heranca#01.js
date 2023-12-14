const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const porche = {
    modelo: 'cayenne',
    velMax: 308
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(porche.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function ObjetoTeste() {}
console.log(typeof Object, typeof ObjetoTeste)
console.log(Object.prototype, ObjetoTeste.prototype)