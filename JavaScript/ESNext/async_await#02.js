function gerarNumeros(min, max, numerosProibidos){
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function sorteio(num, partidas = 1) {
    try {
        const numeros = []
        for (let _ of Array(num).fill()) {
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (partidas > 10) {
            throw "Ops, tente gerar novos números!"
        } else {
            return sorteio(num, partidas + 1)
        }
    }
}

sorteio(15)
    .then(console.log)
    .catch(console.log)

// gerarNumeros(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)