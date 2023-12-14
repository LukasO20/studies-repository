// Função em JS é First-Class Object
// Função é extremamente utilizada em JS

// Criar função de forma literal
function func1() {} //Literal seria essa sintaxe ao lado

// Armazenar função em um dado
const dado_funcao = function teste(){} //É possível de efetuar isso no JS

// Armazenar função em um array
const array = [function arr(a, b) {return a + b, func1, dado_funcao}] //Bem parecido com uma variável comum

// Armazenar atributos de um objeto
const obj = {}
obj.exibir = function () {return 'Mensagem exibida'}
console.log(obj.exibir())

// Usar função como parâmetro
function executar(funcao){
    funcao()
}

executar(function () {console.log('A função foi executada...')})

// Uma função pode retornar outra função
function somar(num1, num2){
    return function(num3) {
        console.log(num1 + num2 + num3)
    }
}

somar(10, 5)(50)