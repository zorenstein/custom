var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin  = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var modernizr  = require('gulp-modernizr');

var watchPaths = [
    'assets/css/main.css',
    'assets/css/main.min.css',
    'assets/js/main.js',
    'assets/js/main.min.js',
    '**/*.php'
];

gulp.task('sass', function() {
    // return sass('assets/sass/main.sass')
    return gulp.src('./assets/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:dist', function() {
    return gulp.src('./assets/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(cssmin())
        .pipe(rename({basename: 'main', suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
    browserify('./assets/js/app.js')
        .bundle()
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        .pipe(rename({basename: 'main'}))
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('modernizr', function() {
    gulp.src('./assets/css/*.css')
        .pipe(modernizr({
            excludeTests: ['hidden']
        }))
        .pipe(gulp.dest('./assets/js/lib'));

});

gulp.task('js:dist', function() {
    browserify('./assets/js/app.js')
        .bundle()
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({basename: 'main', suffix: '.min'}))
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function() {
    livereload.listen()

    gulp.watch('assets/sass/**/*.{sass,scss}', ['sass', 'sass:dist']);
    gulp.watch([
        'assets/js/**/*.js',
        '!assets/js/main.js',
        '!assets/js/main.min.js'
    ], ['js']);

    watch(watchPaths).pipe(livereload());
});

gulp.task('dev', ['sass', 'js', 'watch']);
gulp.task('build', ['sass:dist', 'js:dist']);

gulp.task('default', ['dev']);
