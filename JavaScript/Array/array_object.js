const quaseArray = {0: 'Rafael', 1: 'Mariana', 2: 'Juana'}
console.log(quaseArray)

// Como seria um Array?
Object.defineProperty(quaseArray, 'toString', {
    value: function () {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])