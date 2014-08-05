'use strict';
var requireDir = require('require-dir');
var dir = requireDir('./tasks');
var gulp = require('gulp');

gulp.task('default', function () {
    gulp.start('build');
});

