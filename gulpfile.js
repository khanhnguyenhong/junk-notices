var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copyJS', function() {
  gulp.src('bower_components/**/*.min.js')
  .pipe(gulp.dest('public/javascripts'));
});

gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/stylesheets'));
});