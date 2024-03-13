const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformarTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pip(gulp.dest('build'))
}

exports.default = series(transformarTS)