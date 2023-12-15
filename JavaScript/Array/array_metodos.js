const pilotos = ['Oliver', 'Afonso', 'Massa', 'Shiuma']
pilotos.pop() //Remove último elemento do array
console.log(pilotos)

pilotos.push('Vesteppan')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar ou remover elementos de um []

//adicionar
pilotos.splice(0, 1, 'Elemento_novo')
console.log(pilotos)

const somepílots = pilotos.slice(2)
console.log(somepílots)

const somepilots2 = pilotos.slice(1, 4)
console.log(somepilots2)