'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('start', function(callback) {
  return runSequence(
    'build',
    'run',
    callback
  );
});
