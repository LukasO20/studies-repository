function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Teste Prototype'
MeuObjeto.prototype.speak = function (){
    console.log(`Olá! Meu nome é ${this.nome}`)
}

obj1.speak()

obj2.nome = 'Anonimo'
obj2.speak()