const cliente = {
    saudacao: "Bom dia :)",
    exibir(){
        console.log(this.saudacao)
    }
}

cliente.exibir()

const exibir_1 = cliente.exibir
exibir_1() //Conflito enmtre paradigmas

const exibir2 = cliente.exibir.bind(cliente)
exibir2()