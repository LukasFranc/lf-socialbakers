var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins({pattern: '*'});



gulp.task('build:sass', function () {
  return gulp.src(['src/css/main.scss'])
    .pipe($.sass())
    .pipe($.concat('project.css'))
    .pipe(gulp.dest('src/dist/css/'))
})

gulp.task('build:js', function () {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/tether/dist/js/tether.min.js','node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe($.uglify())
    .pipe($.concat('all.min.js'))
    .pipe(gulp.dest('src/dist/js/'))
})
