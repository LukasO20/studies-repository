function Pessoa_idade(){
    this.idade = 0
    
    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

new Pessoa_idade