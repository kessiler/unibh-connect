'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', ['build'], function(callback) {
    plugins.connect.server({
        root: 'src',
        port: 9000,
        livereload: true
    });
});