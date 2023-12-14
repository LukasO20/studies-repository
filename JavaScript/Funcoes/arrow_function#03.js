let confereThis = function(objeto){
    console.log(this === objeto)
}

confereThis(global)

const teste = {}
confereThis = confereThis.bind(teste)
confereThis(global)
confereThis(teste)

let confereThisArrow = objeto_parametro => console.log(this === objeto_parametro)
confereThisArrow(global)
confereThisArrow(module.exports)

confereThisArrow = confereThisArrow.bind(teste)
confereThisArrow(teste)
confereThisArrow(module.exports)