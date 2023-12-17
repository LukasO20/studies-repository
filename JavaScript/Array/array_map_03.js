Array.prototype.myMap = function(callback) {

    const copy = []

    for (let i = 0; i < this.length; i ++){
        copy.push(callback(this[i], i, this))
    }
    return copy
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let resultado = numbers.myMap(function(e){
    return e * 2
})

console.log('myMap: ' + resultado, '| ' + 'Array: ' + numbers)