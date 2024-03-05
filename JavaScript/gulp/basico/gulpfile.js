const gulp = require('gulp')
const {series, parallel} = require('gulp')

function callback1(clbk) {
    console.log('Iniciando Callback 01...')
    return clbk()
}

function callback2(clbk) {
    console.log('Iniciando Callback 02...')
    return clbk()
}

function copy(cb) {
    console.log('Copiando arquivos...')
    
    //Forma 01
    /*gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        //.pipe() //Adiciona uma série de transformações com os dados de entrada para os novos dados de saída
        .pipe(gulp.dest('pastaB'))*/
    
    //Forma02
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
        return cb()
}

function fim(cb) {
    console.log('Finalizando tarefa...')
    return cb()
}

module.exports.default = series(
    parallel(callback1, callback2),
    copy,
    fim
)