const chaveVariada = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']    
])

chaveVariada.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log(chaveVariada.has(123))
chaveVariada.delete(123)
console.log(chaveVariada.has(123))
console.log(chaveVariada.size)

chaveVariada.set(123, 'a')
chaveVariada.set(143, 'b')
chaveVariada.set(526, 'c')
console.log(chaveVariada)