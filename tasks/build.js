'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

gulp.task('build', ['clean'], function(callback) {
    runSequence('clean', callback);
});