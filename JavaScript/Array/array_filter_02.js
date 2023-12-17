Array.prototype.myFilter = function(callback){
    const copy = []
    for (let i = 0; i < this.length; i ++){
        if (callback(this[i], i, this)){
            copy.push(this[i])
        }
    }
    return copy
}

const produtos = [
    {nome: 'Notebook', preco: 4589.85, fragil: true},
    {nome: 'Desktop', preco: 8589.85, fragil: true},
    {nome: 'Copo de plático', preco: 29.15, fragil: false},
    {nome: 'Book', preco: 289.85, fragil: false},
    {nome: 'Camisa', preco: 89.85, fragil: false}
]

//TESTE
const verificarPreco = produtos => produtos.preco < 500.00
const verificarFragil = produtos => produtos.fragil === false

console.log(produtos.myFilter(verificarPreco).myFilter(verificarFragil))