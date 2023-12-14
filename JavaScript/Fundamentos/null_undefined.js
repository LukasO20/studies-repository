let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 1980.88
console.log(produto)

produto.preco = undefined // Evite a utilização do undefined (a própria linguaguem JS pode usar como referência)
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço (forma ideal)
console.log(!!produto.preco)
console.log(produto)