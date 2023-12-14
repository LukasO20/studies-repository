function teste1(num){
    if (num > 5) //{ Veja que não foi utilizada a identação, porém o JS não se importa com isso.
        console.log(num)
    //}
    console.log('Sem identação.')
}

teste1(4)
teste1(7)

function teste2(num){
    if (num > 15); { //Cuidado, o ";" no JS será considerado como um código válido (irá alterar resultado esperado dessa estrutura)
        console.log(num)
    }
}

teste2(10)
teste2(16)