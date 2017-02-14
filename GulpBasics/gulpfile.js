'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('concat-scripts', function(){
    gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('minify-scripts', function(){
    gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['hello'], function(){
    console.log('This is the default task');
});