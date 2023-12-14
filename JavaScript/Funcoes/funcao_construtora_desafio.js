function CriarPessoa(nome){
    this.nome = nome

    this.exibir = function(){
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p2 = new CriarPessoa('Paulo')
p2.exibir()
console.log(p2.nome)