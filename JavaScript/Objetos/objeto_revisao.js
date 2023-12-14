// OO - Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Mobily'
produto.preco = 255.59

console.log(produto)
delete produto['Marca do produto']

console.log(produto) //Com um elemento deletado

const loja = {
    nome: 'Armarinhos e Tec - Seu Zé',
    endereco: 'Avenida maria coelho aguiar',
    numero: 'CB-230',
    proprietario: {
        nome: 'João Zé',
        idade: 48,
        nacionalidade: 'Brasileiro',
    },
    Herdeiros: [{
        nome: 'Ana',
        idade: 18
    }, {
        nome: 'Luan',
        idade: 22
    }],
    TerrenosImpostos: function(){
        //É possível de criar funcions em objetos
    }
}

console.log(loja)
console.log()

//Para excluir objetos dentro de objetos use a notação '.'
delete loja.proprietario
console.log(loja)
console.log()

//Para acessar objetos dentro de objetos utilize a notação '.'
console.log(loja.Herdeiros)
console.log(loja.proprietario) //Undefined pois o objeto 'proprietario' deixou de exitir após sua exclusão