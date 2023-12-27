let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Luan', 'Julia', 'Henrique', 'Ruan'])
})

// O then sempre receberá um único elemento (até então...)

const primeiroElemtno = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

p//.then(valor => console.log(valor))
    .then(primeiroElemtno)
    .then(primeiroElemtno)
    .then(letraMinuscula)
    .then(console.log)