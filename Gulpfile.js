var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var watch  = require('gulp-watch');
var rename = require('gulp-rename');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

gulp.task('sass', function() {
    // return sass('assets/sass/main.sass')
    return gulp.src('./assets/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.{sass,scss}', ['sass', 'sass:dist']);
});

gulp.task('dev', ['sass', 'watch']);

gulp.task('default', ['dev']);
