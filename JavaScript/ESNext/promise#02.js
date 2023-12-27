function wait(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Concluído')
        }, tempo)
    })
}

wait(3000)
    .then(texto => console.log(texto))
    .then(wait)