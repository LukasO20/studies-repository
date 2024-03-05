const gulp = require('gulp')
const series = gulp.series

function hello(ms) {
    console.log('Olá, eu sou o GULP :] ')
    return ms
}

module.exports = series(hello)