function Carro(velocidade_maxima = 200, delta = 5){
    // atributo privado
    let velocidade_atual = 0
    
    // metodo publico 
    this.acelerar = function (){
        if (velocidade_atual + delta <= velocidade_maxima) {
            velocidade_atual += delta
        } else {
            velocidade_atual = velocidade_maxima
        }
    }

    // metodo publico
    this.getVelocidade_atual = function(){
        return velocidade_atual
    }
}

const fusca = new Carro
fusca.acelerar()
console.log(fusca.getVelocidade_atual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidade_atual())