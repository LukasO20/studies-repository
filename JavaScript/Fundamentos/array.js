const array = [7.7, 8.8, 9.9, 6.8]
console.log(array[0], array[3])
console.log(array[4])

array[4] = 10
console.log(array)
console.log(array.length)

array.push({id: 5}, false, null, 'Testando Array')
console.log(array)

console.log(array.pop())
delete array[1]
console.log(array)

console.log(typeof array)

