function falarDepoisDe(segundos, frase){
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Olha só o Promise')
    .then(frase => frase.concat('?:?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))