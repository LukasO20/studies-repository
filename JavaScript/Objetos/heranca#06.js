function Aula(nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}

const aula01 = new Aula('Olá, Bem vindo(a) a aula!', 456)
const aula02 = new Aula('Olá, Bem vindo(a) a aula!', 4987)
console.log(aula01, aula02)

// Como é o new?
function novo(f, ...param){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, param)
    return obj
}

const aula03 = novo(Aula, 'Olá, esse objeto foi criado!', 445)
const aula04 = novo(Aula, 'Também foi personalizado', 4448)
console.log(aula03, aula04)