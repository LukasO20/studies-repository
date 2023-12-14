var numero = 1 
{
    var numero = 2
    console.log('Dentro - ', numero)
}
console.log('Fora - ', numero)

/* Não há um bloco de código (function) e por isso o numero receberá o valor 2 
(O JS captura o escopo principal) */