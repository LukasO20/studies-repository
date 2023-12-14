console.log() //Para acessar logo utilize '.' <----
console.log(Math.ceil(6.1))

const objeto1 = {}
objeto1.nome = 'Arroz'
// objeto1['nome'] = 'Feijão'

console.log(objeto1.nome)

function Obj(nome) {
    this.nome = nome
    this.execute = function () {
        console.log('Você definiu este valor...')
    }
}

const objeto2 = new Obj('Mesa')
const objeto3 = new Obj('Tapete')

console.log(objeto2.nome)
console.log(objeto3.nome)