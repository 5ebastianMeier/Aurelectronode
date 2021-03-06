'use strict';

const gulp = require('gulp');
const paths = require('../paths');
const eslint = require('gulp-eslint');

// runs eslint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
