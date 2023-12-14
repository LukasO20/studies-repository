let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //TRUE

isAtivo = 2 
console.log(!isAtivo) //FALSE

console.log('Verdade!')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log('Falso!')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Testando o Boolean...')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Nome desconhecido')