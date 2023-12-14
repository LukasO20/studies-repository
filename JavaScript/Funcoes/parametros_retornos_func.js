function area(largura, altura){
    const valor = largura * altura
    if (valor > 20){
        console.log('Valor não aceito pois é acima do permitido.' + valor + 'm2.')
    } else {
        valor
    }
}

console.log(area(5, 5))
console.log(area(5))
console.log(area())
console.log(area(2, 3, 6)) //Aqui o valor 6 será ignorado pois o parâmetro só considera dois valores.
console.log(area(2, 5))