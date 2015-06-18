var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./assets/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    browserSync.init({
      proxy: 'test-site.dev'
    });

    gulp.watch('./assets/sass/**/*.{sass,scss}', ['sass']);
    gulp.watch('./assets/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});

gulp.task('dev', ['sass', 'watch']);

gulp.task('default', ['dev']);
