const pai = {nome: 'Carlos', corCabelo: 'Marrom'}

const filha = Object.create(pai)
filha.nome = 'Manoela'
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bianca', writable: true, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carolina'
console.log(`${filha2.nome} tem cabelo da cor: ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Esse objeto tem herança: ${key}`)
}