const bodyParser = require('body-parser')
const jsexpress = require('express')
const app = jsexpress()

app.use(jsexpress.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    }, 
    filename: function (req, file, callback) {
        callback(null, `${file.name}_${Date.now()}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, erro => {
        if (erro) {
            return res.end('Ocorreu um erro ao efetuar o upload.')
        }

        res.end('Upload concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(5500, () => console.log('Executando...'))
