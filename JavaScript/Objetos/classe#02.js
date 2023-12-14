class Avo {
    constructor(sobronome = 'Sem informação'){
        this.sobronome = sobronome
    }
}

class Pai extends Avo {
    constructor (sobronome, profrissao = 'Sem profissão'){
        super(sobronome),
        this.profrissao = profrissao
    }
}

class Filho extends Pai {
    constructor (){
        super('Oliveira')
        this.profrissao = 'Engenheiro'
    }
}

const filho = new Filho
console.log(filho) 