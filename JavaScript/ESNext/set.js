// Não aceita repetição e não é indexado
const carros = new Set()
carros.add('Porche')
carros.add('Ford').add('Ford Focus').add('Ford GT')
carros.add('Ferrari')
carros.add('Ferrari F40')
carros.add('Ferrari F40') //Não sera adicionado por conta de repetição

console.log(carros)
console.log(carros.size)
console.log(carros.has('ferrar'))
console.log(carros.has('Ferrari'))
carros.delete('Ford')
console.log(carros.has('Ford'))


const nomes = ['Julian', 'Jéssica', 'Jéssica', 'Raquel', 'Debora']
const nomesSet = new Set(nomes)
console.log(nomesSet)