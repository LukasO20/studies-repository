// Tipos de Notação permitidos a partir do EcmaScript 2015

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 8.50

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    function: function(){
        //...
    },
    function2(){
        //...
    }
}

console.log(obj5)