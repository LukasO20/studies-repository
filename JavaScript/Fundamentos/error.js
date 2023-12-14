function resolverProblema(error){
    throw new Error('Problemas no servidor, tente novamente mais tarde!')
//     throw 1 
//     throw
}


function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        resolverProblema(e)
    } finally {
        console.log('end')
    }
}

const obj = {nome: 'Lucas'}
imprimirNome(obj)