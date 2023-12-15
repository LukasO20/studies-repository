//Como seria um pseudo forEach?

Array.prototype.MyForeach = function (callback){
    for (var i = 0; i < this.length; i ++){
        callback(this[i], i, this)
    }
} 

const teste_myarray = ['Ana', 'Juana', 'Larisse', 'Lucas', 'Juan']

teste_myarray.MyForeach(function (name, indice){
    console.log(`${indice + 1}: ${name}`)
})