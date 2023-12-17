const produtos = [
    {nome: 'Notebook', preco: 4589.85, fragil: true},
    {nome: 'Desktop', preco: 8589.85, fragil: true},
    {nome: 'Copo de plático', preco: 29.15, fragil: false},
    {nome: 'Book', preco: 289.85, fragil: false},
    {nome: 'Camisa', preco: 89.85, fragil: false}
]

console.log(produtos.filter(function (callback){
    return callback.preco > 1000.00
    //return true (retornará tudo)
    //return false (retornará nada)
}))

//TESTE

const verificarPreco = preco => preco < 500.00
const verificarFragil = fragil => fragil === false

console.log(produtos.filter(function (callback){
    return verificarPreco(callback.preco) && verificarFragil(callback.fragil)
}))