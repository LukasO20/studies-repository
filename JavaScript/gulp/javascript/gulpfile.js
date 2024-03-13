const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', error => console.log(error))
        .pipe(concat('codejs.min.js'))
        .pipe(gulp.dest('new-build'))

    return cb()
}

function fim(cb) {
    console.log('Finalizado!!')
    return cb()
}

exports.default = series(padrao, fim)