function Test(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ops. Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

Test('Testando...', 0.1)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Finish!'))