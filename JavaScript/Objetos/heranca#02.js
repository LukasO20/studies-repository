// Cadeia de protótipos [prototype chain]

Object.prototype.attr0 = 'Default' //Experimental

const prototype_avo = {attr1: 'A'}
const prototype_pai = {__proto__: prototype_avo, attr2: 'B', attr3: 'C'}
const prototype_filho = {__proto__: prototype_pai, attr4: 'D', attr5: 'E'}
console.log(prototype_filho.attr0, prototype_filho.attr1, prototype_filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(148)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())