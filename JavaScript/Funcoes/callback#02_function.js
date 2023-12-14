const notas = [7.7, 8.8, 10, 9.5, 7.5, 8.4]

// Sem callback
const notasAltas = []
for (let i in notas){
    if (notas[i] >= 8){
        notasAltas.push(notas[i])
    }
}
console.log(notasAltas)

// Com callback
const notasBaixas = notas.filter(function (nota){
    return nota < 8
})
console.log(notasBaixas)

const notasBaixasArrow = notas.filter(notas => notas < 8)
console.log(notasBaixasArrow)

