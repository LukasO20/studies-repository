// Object.preventExtensions

// O objeto somente pode ser modificado ou deletado (não é extensível)
const produto = Object.preventExtensions({
    nome: 'Stock', preco: 5.99, tag: 'teste', excluir: 'delete'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Novo nome_stock'
produto.descricao = 'Não funcionará' //Objeto não extensível
delete produto.excluir
console.log(produto)

// Object.seal
const produto2 = {nome: 'Teste', tag: 'Não alterável'}
Object.seal(produto2)
console.log('Objeto selado: ', Object.isSealed(produto2))

delete produto2.nome
produto.nome = 'Novo nome'
console.log(produto2)

// Object.freeze - Congela objeto