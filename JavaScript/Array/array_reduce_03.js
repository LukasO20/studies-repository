Array.prototype.myReduce = function(callback_index, callback_valor){
    const indice_inicial = callback_valor ? 0 : 1
    let acumulador = callback_valor || this[0]
    for (var i = indice_inicial; i < this.length; i ++){
        acumulador = callback_index(acumulador, this[i], i, this)
    }
    return acumulador
}

const nums = [1, 2, 140, 12, 14]
const soma = (total, valor) => total + valor
console.log(nums.myReduce(soma, 10))