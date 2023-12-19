const moduloA = require('../../moduloA') //caminhos relativos '../' sai da pasta atual
console.log(moduloA.welcome)

const http = require('http')
http.createServer((req, res) => {
    res.write('Olá, bom dia :]')
    res.end()
}).listen(5090)