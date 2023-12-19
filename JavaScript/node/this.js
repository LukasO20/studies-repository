function logThis() {
    console.log('Dentro de uma função o this é diferente...')
    console.log(`O this se refere a global dentro de uma function? ${this === global}`)
}
logThis()