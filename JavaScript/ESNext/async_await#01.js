function wait(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

function returnValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function waitAsync() {
    let valor = await returnValor()

    await wait(1500)
    console.log(`Async/Await... ${valor++}`)

    await wait(1500)
    console.log(`Async/Await... ${valor++}`)

    await wait(1500)
    console.log(`Async/Await... ${valor++}`)
}

waitAsync()