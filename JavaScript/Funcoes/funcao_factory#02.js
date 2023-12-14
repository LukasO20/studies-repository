// Facotory com parametros

function Produto(nome = 'informe um nome', preco = 0){
    return {
        nome: nome,
        preco: preco
    }
}

console.log(Produto())
console.log(Produto('Leite', 5.99))
console.log(Produto('Samsung Smart TV 4K', 4.599))