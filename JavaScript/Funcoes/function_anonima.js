const soma  = function(a, b){
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(10, 10)
imprimirResultado(5, 4, soma)
imprimirResultado(2, 3, function(x, y){
    return x + y
})

imprimirResultado(3, 3, (x, y) => x + y)

const mensagem = {
    exibir: function(){
        console.log('Olá, como vai?')
    },
    idade: function(parametro){
        console.log('Você possui ' + parametro + ' anos!')
    }
}

mensagem.exibir()
mensagem.idade(23)