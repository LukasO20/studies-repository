let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Função arrow de retorno implicito

console.log(dobro(10))

let messagem = function(){
    return 'Olá, como vai?'
}

mensagem = () => 'Olá, como vai?'
mensagem = _ => 'Olá, como vai?'
console.log(messagem())