// criar_objeto --> 123 --> {...} - Toda vez que um objeto é criado sua referência será pelo endereço de memória
const criar_objeto = {nome: 'ObjetoDinamico'}
criar_objeto.nome = 'ObjectoDinamico_alterado'
console.log(criar_objeto)

// criar_objeto --> 444 --> {...} - Se o objeto receber uma atribuição existente (dará erro)
// criar_objeto = {nome: 'Nomenovo'} - Esse objeto já possui o atributo 'nome'
//console.log(criar_objeto)

Object.freeze(criar_objeto) //Qualquer tipo de manipualção como, deleção, atribuição, etc. Não será permitido após o método 'freeze' (Congela o object)

criar_objeto.nome = 'NomeAlterado2'
console.log(criar_objeto)

const criar_objeto_constante = Object.freeze({nome: 'Objeto constante'})
criar_objeto_constante.nome = 'Novo nome' //Não altera ao incluir 'freeze' no object

console.log(criar_objeto_constante)