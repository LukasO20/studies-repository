const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function execute(){
    const valor = 'Local'
    minhaFuncao()
}

execute()