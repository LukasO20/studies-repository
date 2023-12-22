const { forEach } = require("lodash")

function real(parte, ...valor){
    const resultado = []
    valor.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(parte[indice], valor)
    })
    return resultado.join('')
}

const preco = 35.58
const parcela = 5
console.log(real `1x de ${preco} ou 2x de ${parcela}`)