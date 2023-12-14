{{{{var texto = 'Texto' 
console.log(texto)}}}}

console.log(texto)

function bloco() {
    var local_bloco = 123
    console.log(local_bloco)
}

bloco()
/* console.log(local_bloco) <-- Não é possível de acessar 
a var 'local_bloco' fora da function */