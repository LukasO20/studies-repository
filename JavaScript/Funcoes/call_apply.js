function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook Asus',
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 50000, desc: 0.25}

//Ao chamar o métodos call e apply, desde que possua o contexto (Objeto 'carro') e o restante dos parametros que a função precisar serão acionados
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.15, '$')) //Não utiliza array nos parametros
console.log(getPreco.apply(carro, [0.15, '$'])) //Precisa de array nos parametros