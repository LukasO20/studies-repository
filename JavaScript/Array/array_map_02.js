const carrinho = [
    '{ "nome": "Borracha", "preco": "49.99" }',
    '{ "nome": "Lençol", "preco": "89.99" }',
    '{ "nome": "Computador", "preco": "4699.99" }',
    '{ "nome": "Smart TV", "preco": "4899.99" }'
]

const converterObject = json => JSON.parse(json)
const capturarPreco = produto => 'R$' + produto.preco 

const resultado = carrinho.map(converterObject).map(capturarPreco)

console.log(resultado)