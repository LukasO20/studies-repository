function getNumberAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let option = 0

do {
    option = getNumberAleatorio(-1, 10)
    console.log(`Opção selecionada ${option}.`)
} while (option != -1)

console.log('Obrigado por usar esse loop! :)')