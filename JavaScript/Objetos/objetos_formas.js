// Usando a notação literal
const objct = {}
console.log(typeof(objct))

// Object em JS
console.log(typeof Object, typeof new Object)
const objct2 = new Object
console.log(objct2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 3.99, 0.1)
const p2 = new Produto('Notebook', 3500.50, 0.15)
console.log((p1.getDesconto()), (p2.getDesconto()))

// Função Factory
function CriarFuncionario(nome, salario, faltas){
    return {
        nome, 
        salario, 
        faltas,
        getSalarioFinal() {
            return ((salario / 30) * (30 - faltas))
        }
    }
}

const f1 = CriarFuncionario('Mariana', 5600, 5)
const f2 = CriarFuncionario('José', 6850.50, 6)
console.log((f1.getSalarioFinal()), (f2.getSalarioFinal()))

// Object.create
const pessoa = Object.create(null)
pessoa.nome = 'Larissa'
console.log(pessoa)

// JSON em Object
const jsonObject = JSON.parse('{"info": "Sou um JSON :D"}')
console.log(jsonObject.info)