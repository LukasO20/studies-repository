console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Esse string será revertida...'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log(['A', 'B', 'C', 'D', 'E'].first())
console.log([1, 2, 3, 4, 5].first())

console.log('ISSO pode'.toLocaleLowerCase().reverse())

// Não atribua functions personalizadas para Functions padrão do JS como 'toLocaleLowerCase()', isso pode causar muitos problemas (O JS é doido e ele deixa fazer isso kkk)
String.prototype.toLocaleLowerCase = function (){
    return 'Tem coragem de atribuir algo para mim mesmo?...'
}