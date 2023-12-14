const marcas = ['Mercedes', 'Ford', 'McLaren', 'BMW']

function exibir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

marcas.forEach(exibir)
marcas.forEach(marcas => console.log(marcas))