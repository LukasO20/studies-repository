const notas = [8.8, 9.9, 4.2, 7.6, 5.2, 4.3]

for (let i in notas){
    console.log(`Indice[${i}] = ${notas[i]}`)
}

const pessoa = {
    nome: 'Juliana',
    peso: '68.8KG',
    altura: '1.75m',
    idade: '21',
    sexo: 'feminino',
    nacionalidade: 'Brasileira'
}

for (let atributo in pessoa){
    console.log(`Indice[${atributo}] = ${pessoa[atributo]}`)
}