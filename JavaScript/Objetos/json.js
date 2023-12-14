const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log('Sem JSON: ', obj) 
console.log('Com JSON: ', JSON.stringify(obj)) //São consideros somente textos


//Formatos inválidos para JSON
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

//Formato válido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //Todos os atributos em JSON precisa ter aspas duplas


//Utilize sites JSON "validator" para ajudar a conferir se o formato JSON criado é válido