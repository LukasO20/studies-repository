console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Joana', 'Larissa', 'Lucas')
console.log(aprovados)

aprovados = ['Julio', 'Cleber', 'Juan']
console.log(aprovados)
console.log(aprovados[2])

aprovados[3] = 'Juliana'
console.log(aprovados)
aprovados.push('Ana')
console.log(aprovados)
console.log(aprovados.length)

aprovados[10] = 'Eu sou o último'
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //Excluirá o elemento do Index '1' e seu valor padrão será 'undefined'
console.log(aprovados)


let teste = new Array('Bianca', 'Luisa', 'Eliana')
teste.splice(2, 1, 'ElementoNovo1', 'ElementoNovo2')
console.log(teste)