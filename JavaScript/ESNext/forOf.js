for (let letra of 'LearningCode') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Reduce', 'Promise', 'Set']

for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Reduce', {abordado: true}],
    ['Set', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valores of assuntosMap.values()){
    console.log(valores)
}

for (let entrie of assuntosMap.entries()){
    console.log(entrie)
}

const vogais = new Set(['a', 'e', 'i', 'o', 'u'])
for (let vogal of vogais){
    console.log(vogal)
}