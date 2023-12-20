const porta = 5500

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bd')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos_Apiteste', (req, res, next) => {
    res.send(bd.getProdutos()) 
})

app.get('/produtos_Apiteste/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos_Apiteste', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos_Apiteste/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos_Apiteste/:id', (req, res, next) => {
    const produto = bd.deleteProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log('Servidor está executando na porta ' + porta + '.')
})