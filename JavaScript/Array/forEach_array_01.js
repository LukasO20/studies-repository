const aprovados = ['Agatha', 'Aldo', 'July', 'Roger']

aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))