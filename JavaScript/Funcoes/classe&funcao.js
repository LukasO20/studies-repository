class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    exibir(){
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('Lucas')
p1.exibir()

const CriarPessoa = nome => {
    return {
        exibir: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = CriarPessoa('Manoela')
p2.exibir()