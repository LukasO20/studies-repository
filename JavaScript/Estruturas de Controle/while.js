function getNumberAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let option = 0

while (option != -1) {
    option = getNumberAleatorio(-1, 10)
    console.log(`Opção selecionada ${option}.`)
}

console.log('Obrigado por usar esse loop! :)')