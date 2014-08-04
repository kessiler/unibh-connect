'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', ['build'], function(cb) {
    plugins.connect.server({
        root: 'dist'
    });
});